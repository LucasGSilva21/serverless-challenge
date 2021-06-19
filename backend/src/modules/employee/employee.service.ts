import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { EmployeeEntity } from './employee.entity';
import { EmployeeDTO, CreateEmployeeDTO, UpdateEmployeeDTO } from './dto';
import { EmployeeMapper } from './mapper/employee.mapper';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeRepository)
        private readonly employeeRepository: EmployeeRepository,
    ) { }

    async index(): Promise<EmployeeDTO[]> {
        const employees = await this.employeeRepository.find();

        if (!employees) {
            return [];
        }

        return await Promise.all(
            employees.map((employee) => EmployeeMapper.fromEntityToDTO(employee)),
        );
    }

    async show(id: string): Promise<EmployeeEntity> {
        const employee = await this.employeeRepository.findOne({ id });

        if (!employee) throw new NotFoundException();

        return employee;
    }

    async create(createEmployeeDTO: CreateEmployeeDTO): Promise<EmployeeDTO> {
        const entity = EmployeeMapper.fromDTOtoEntity(createEmployeeDTO);

        const employee = await this.employeeRepository.save(entity);

        return EmployeeMapper.fromEntityToDTO(employee);
    }

    async update(
        updateEmployeeDTO: UpdateEmployeeDTO,
        id: string,
    ): Promise<EmployeeDTO> {
        const employeeExists = await this.employeeRepository.findOne(id);

        if (!employeeExists) {
            throw new NotFoundException();
        }

        const entity = EmployeeMapper.fromDTOtoEntity(updateEmployeeDTO);

        const updated = Object.assign(employeeExists, entity);

        const employee = await this.employeeRepository.save(updated);

        return EmployeeMapper.fromEntityToDTO(employee);
    }

    async delete(id: string): Promise<void> {
        const employeeExists = await this.employeeRepository.findOne({ id });

        if (!employeeExists) {
            throw new NotFoundException();
        }

        await this.employeeRepository.delete(id);
    }
}

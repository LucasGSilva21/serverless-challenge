import {
    Get,
    Post,
    Body,
    Put,
    Delete,
    Param,
    Controller,
    UsePipes,
    ValidationPipe,
    HttpCode,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeDTO, CreateEmployeeDTO, UpdateEmployeeDTO } from './dto';

@Controller('api/v1/employees')
@ApiTags('employees')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Success',
        type: [EmployeeDTO],
    })
    async findAll(): Promise<EmployeeDTO[]> {
        return await this.employeeService.index();
    }

    @Get('/:id')
    @ApiResponse({
        status: 200,
        description: 'Success',
        type: EmployeeDTO,
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async findById(@Param('id') id: string): Promise<EmployeeDTO> {
        return await this.employeeService.show(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiResponse({
        status: 201,
        description: 'Success',
        type: EmployeeDTO,
    })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async create(@Body() createEmployeeDTO: CreateEmployeeDTO): Promise<EmployeeDTO> {
        return await this.employeeService.create(createEmployeeDTO);
    }

    @Put('/:id')
    @UsePipes(new ValidationPipe())
    @ApiResponse({
        status: 200,
        description: 'Success',
        type: EmployeeDTO,
    })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async update(
        @Param('id') id: string,
        @Body() updateEmployeeDTO: UpdateEmployeeDTO,
    ): Promise<EmployeeDTO> {
        return await this.employeeService.update(updateEmployeeDTO, id);
    }

    @Delete('/:id')
    @HttpCode(204)
    @ApiResponse({ status: 204, description: 'Success' })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async delete(@Param('id') id: string): Promise<void> {
        await this.employeeService.delete(id);
    }
}

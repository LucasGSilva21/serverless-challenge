import { OmitType } from '@nestjs/swagger';
import { EmployeeDTO } from './employee.dto';

export class CreateEmployeeDTO extends OmitType(EmployeeDTO, [
    'id',
    'createdAt',
    'updatedAt',
] as const) { }

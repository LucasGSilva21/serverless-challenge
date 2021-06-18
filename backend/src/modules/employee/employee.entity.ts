import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../core/base.entity';

@Entity('employees')
export class EmployeeEntity extends BaseEntity {
  @Column()
  name: string;
}

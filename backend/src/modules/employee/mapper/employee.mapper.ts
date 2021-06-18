import { EmployeeEntity } from '../employee.entity';
import { EmployeeDTO, CreateEmployeeDTO, UpdateEmployeeDTO } from '../dto';

export class UserMapper {
  static fromDTOtoEntity(entityDTO: CreateEmployeeDTO | UpdateEmployeeDTO): EmployeeEntity {
    if (!entityDTO) {
      return;
    }
    const entity = new EmployeeEntity();

    const fields = Object.getOwnPropertyNames(entityDTO);

    fields.forEach((field) => {
      entity[field] = entityDTO[field];
    });

    return entity;
  }

  static fromEntityToDTO(entity: EmployeeEntity): EmployeeDTO {
    if (!entity) return;

    const entityDTO = new EmployeeDTO();

    entityDTO.id = entity.id;
    entityDTO.createdAt = entity.createdAt;
    entityDTO.updatedAt = entity.updatedAt;
    entityDTO.name = entity.name;

    return entityDTO;
  }
}

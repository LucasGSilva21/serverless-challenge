import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeModule } from './employee.module';
import { EmployeeEntity } from './employee.entity';
import * as typeOrmConfig from '../../config/typeorm.config';

let app: INestApplication;
let repository: Repository<EmployeeEntity>;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [
      TypeOrmModule.forRoot(typeOrmConfig),
      EmployeeModule,
    ],
  }).compile();
  app = module.createNestApplication();
  await app.init();

  repository = module.get('EmployeeRepository');
});

afterAll(async () => {
  await app.close();
});

afterEach(async () => {
  await repository.query(`DELETE FROM employees;`);
});

describe('GET /employees', () => {
  it('should return an array of employees', async () => {
   
    await repository.save([
      { name: 'test-name-0', age: 18, jobTitle: 'test-name-0' },
      { name: 'test-name-1', age: 18, jobTitle: 'test-name-1' },
    ]);

    const { body } = await request(app.getHttpServer())
      .get('/api/v1/employees')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(body).toHaveLength(2);

  });
});

describe('GET /employees/:id', () => {
  it('should return an employee', async () => {
   
    const { id } = await repository.save({ name: 'test-name-0', age: 18, jobTitle: 'test-name-0' });

    const { body } = await request(app.getHttpServer())
      .get(`/api/v1/employees/${id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(body.name).toBe('test-name-0');

  });
});

describe('POST /employees', () => {
  it('should create an employee', async () => {

    await request(app.getHttpServer())
      .post('/api/v1/employees')
      .send({ name: 'test-name-0' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);

    const { body } = await request(app.getHttpServer())
      .post('/api/v1/employees')
      .send({ name: 'test-name-0', age: 18, jobTitle: 'test-name-0' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);

    expect(body.name).toBe('test-name-0');

  });
});

describe('PUT /employees/:id', () => {
  it('should update an employee', async () => {
   
    const { id } = await repository.save({ name: 'test-name-0', age: 18, jobTitle: 'test-name-0' });

    const { body } = await request(app.getHttpServer())
      .put(`/api/v1/employees/${id}`)
      .send({ name: 'test-update-name-0' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(body.name).toBe('test-update-name-0');

  });
});

describe('DELETE /employees/:id', () => {
  it('should delete an employee', async () => {
   
    const { id } = await repository.save({ name: 'test-name-0', age: 18, jobTitle: 'test-name-0' });

    await request(app.getHttpServer())
      .delete(`/api/v1/employees/${id}`)
      .expect(204);

  });
});

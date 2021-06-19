import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeModule } from './employee.module';
import { EmployeeEntity } from './employee.entity';

let app: INestApplication;
let repository: Repository<EmployeeEntity>;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [
      EmployeeModule,
      // Use the e2e_test database to run the tests
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'serverless-test',
        entities: ['./**/*.entity.{js,ts}'],
        synchronize: true,
      }),
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
    // Pre-populate the DB with some dummy users
    await repository.save([
      { name: 'test-name-0', age: 18, jobTitle: 'test-name-0' },
      { name: 'test-name-1', age: 18, jobTitle: 'test-name-1' },
    ]);

    // Run your end-to-end test
    const { body } = await request(app.getHttpServer())
      .get('/api/v1/employees')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

  });
});

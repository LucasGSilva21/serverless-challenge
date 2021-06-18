import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { snakeNamingStrategy } from './typeorm-postgres-naming-strategy.instance';
import * as dotenv from 'dotenv';

dotenv.config();

const commonConf = {
  SYNCRONIZE: false,
  ENTITIES: [__dirname + '/../modules/**/*.entity.{js,ts}'],
  MIGRATIONS: [__dirname + '/../database/migrations/*{.ts,.js}'],
  CLI: {
    migrationsDir: 'src/database/migrations',
  },
  MIGRATIONS_RUN: true,
  MIGRATIONS_TABLE_NAME: 'migrations_typeorm',
  NAMING_STRAGEGY: snakeNamingStrategy,
};

let typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: true,
  synchronize: true,
  entities: commonConf.ENTITIES,
  migrations: commonConf.MIGRATIONS,
  cli: commonConf.CLI,
  migrationsRun: commonConf.MIGRATIONS_RUN,
  migrationsTableName: commonConf.MIGRATIONS_TABLE_NAME,
  namingStrategy: commonConf.NAMING_STRAGEGY,
};

if (process.env.NODE_ENV === 'prod') {
  typeOrmConfig = {
    ...typeOrmConfig,
  };
}

if (process.env.NODE_ENV === 'test') {
  typeOrmConfig = {
    ...typeOrmConfig,
    name: 'default',
    type: 'sqlite',
    database: ':memory:',
    keepConnectionAlive: true,
    logging: true,
    synchronize: true,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

export = typeOrmConfig;

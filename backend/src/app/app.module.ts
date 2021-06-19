import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as typeOrmConfig from '../config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from '../modules/employee/employee.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot(typeOrmConfig),
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

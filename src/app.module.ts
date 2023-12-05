import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { PlannerModule } from './planner/planner.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
  
     })
     }),

     // typeorm config line
     TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
     useFactory: (configService: ConfigService) => ({
        type: 'postgres',
       host: configService.get('DB_HOST'),
       port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'), 
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
       //ssl:configService.get('DB_SSL'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

     CustomersModule,

     PlannerModule,

     TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

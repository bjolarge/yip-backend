import { Module } from '@nestjs/common';
import { PlannerService } from './planner.service';
import { PlannerController } from './planner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { TasksModule } from 'src/tasks/tasks.module';
import { Planner } from './entities/planner.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Planner]), TasksModule],
  controllers: [PlannerController],
  providers: [PlannerService],
})
export class PlannerModule {}

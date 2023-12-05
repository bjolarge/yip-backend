import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlannerService } from './planner.service';
import { CreatePlannerDto } from './dto/create-planner.dto';
import { UpdatePlannerDto } from './dto/update-planner.dto';
import { TasksService } from 'src/tasks/tasks.service';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';

@Controller('planner')
export class PlannerController {
  constructor(
    private readonly plannerService: PlannerService, 
    private readonly taskService:TasksService
    ) {}

    // @Post('/date')
    // createFromSevenDays(@Body() createtaskDto: CreateTaskDto) {
    //   return this.taskService.create(createtaskDto);
    // }

  @Post()
  create(@Body() createPlannerDto: CreatePlannerDto) {
    return this.plannerService.create(createPlannerDto);
  }

  @Get()
  findAll() {
    return this.plannerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plannerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlannerDto: UpdatePlannerDto) {
    return this.plannerService.update(+id, updatePlannerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plannerService.remove(+id);
  }
}

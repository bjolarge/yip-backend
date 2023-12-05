import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlannerDto } from './dto/create-planner.dto';
import { UpdatePlannerDto } from './dto/update-planner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Planner } from './entities/planner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlannerService {
  constructor( @InjectRepository(Planner)
  private readonly plannerRepository:Repository<Planner>,
  ){}
  async create(createPlannerDto:CreatePlannerDto) {
    const planner = await this.plannerRepository.create(createPlannerDto)
         return this.plannerRepository.save(planner);
  }

  findAll() {
    return this.plannerRepository.find();
  }

  findOne(id) {
    const planner =  this.plannerRepository.findOne({where: {id}});
    if(!planner){
      throw new NotFoundException(`Planner with the given #${id} not found`);
    }
    return planner;
  }

  async update(id: number, updatePlannerDto:UpdatePlannerDto) {
    const existingPlannerDto= await this.plannerRepository.preload({
      id:+id,
      ...updatePlannerDto,
    });
    if(!existingPlannerDto){
      throw new NotFoundException(`The Planner with the given ${id} not found`);
    
    return this.plannerRepository.save(existingPlannerDto);
  }
}

async remove(id:number) {
  const planner = await this.findOne(id);
  return this.plannerRepository.remove(planner);
}
}
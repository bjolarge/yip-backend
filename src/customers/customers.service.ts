import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor( @InjectRepository(Customer)
  private readonly customerRepository:Repository<Customer>,
  ){}
  async create(createCustomerDto:CreateCustomerDto) {
    const customer = await this.customerRepository.create(createCustomerDto)
         return this.customerRepository.save(customer);
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id) {
    const customer =  this.customerRepository.findOne({where: {id}});
    if(!customer){
      throw new NotFoundException(`Customer with the given #${id} not found`);
    }
    return customer;
  }

  async update(id: number, updateCustomerDto:UpdateCustomerDto) {
    const existingCustomer= await this.customerRepository.preload({
      id:+id,
      ...updateCustomerDto,
    });
    if(!existingCustomer){
      throw new NotFoundException(`The Customer with the given ${id} not found`);
    }
    return this.customerRepository.save(existingCustomer);
  }

  async remove(id:number) {
    const customer = await this.findOne(id);
    return this.customerRepository.remove(customer);
  }
}

import { IsNotEmpty, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Type } from 'class-transformer';
import { addDays } from 'date-fns';

@Entity('planx')
export class Planner {
    @PrimaryGeneratedColumn()
    id:number;

    //@Type(() => Date)
    // @Column()
    // date:string;
    // @Column('text')
    //date: Date;

    @Column()
    Slot1:string

    @Column()
    Slot2:string

    @Column({
        nullable:false,
        default: new Date(Date.now().toLocaleString())
    })
    @CreateDateColumn()
    createdAt?: Date;
  
    @Column({
        nullable: false,
       // default: new Date(Date.now())
      //default: new Date(),
      // default: new Date(Date.now()+7),
      //default: new Date(Date.now()).getDate()+7,
     default: addDays(new Date(Date.now()), 7).toLocaleDateString()    
    //  default: new Date(Date.now() + ( 3600 * 1000 * 24* 7)),       
    // type: 'daterange'
     //type: 'timestamp'
      })
    //@UpdateDateColumn()
    updatedAt?:Date;

    @Column()
    Slot3:string

    @Column()
    Slot4:string

}
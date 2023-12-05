import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    public id:number;
    @Column()
    public customerName:string;
    @Column()
    pickuplocation:string;
    @Column()
    dropOfLocation:string;
    

}

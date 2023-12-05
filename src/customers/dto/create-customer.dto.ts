import {IsNotEmpty, IsString } from "class-validator";
export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    public customerName:string;
    @IsString()
    @IsNotEmpty()
    pickuplocation:string;
    @IsString()
    @IsNotEmpty()
    dropOfLocation:string;
}

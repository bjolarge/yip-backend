import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePlannerDto {
    // @IsDateString()
    // date: string;
    @IsDate()
    @IsOptional()
    createdAt?: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;

    @IsString()
    @IsNotEmpty()
    Slot1:string

    @IsString()
    @IsNotEmpty()
    Slot2:string

    @IsString()
    @IsNotEmpty()
    Slot3:string

    @IsString()
    @IsNotEmpty()
    Slot4:string
}

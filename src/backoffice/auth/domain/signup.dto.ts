import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'User name',example:'epadilla' })
    username: string;

   

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'User password',example:'123Aq' })
    pass: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'User password',example:'2018-05-05' })
    fechanacimiento: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ description: 'User password',example:1 })
    sex: number;

   
    
}
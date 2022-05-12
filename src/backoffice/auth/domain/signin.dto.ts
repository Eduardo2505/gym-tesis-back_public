import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SigninDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'User name required' })
    username: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'User password required' })
    pass: string;

    
}
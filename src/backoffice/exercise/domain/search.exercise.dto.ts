import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Exercise } from '../../../shared/domain/exercise.entity';
export class SearchExerciseDto {

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'Optional ' })
    buscado: string;

  


    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Required ',example :1  })
    page: number
}


export class ExerciseResultDto {
    list: Exercise[];
    count: number;

    constructor(list: Exercise[], count: number) {
        this.list = list;
        this.count = count;
    }

}


export class createExerciseDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Optional ' })
    idexercise: number;


    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Required ',example :1  })
    idusergym: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Required ',example :1  })
    calificacion: number;
}

export class responseDto {


    ok: string;


    
}
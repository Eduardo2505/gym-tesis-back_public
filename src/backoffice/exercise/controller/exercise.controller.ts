import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  ParseIntPipe
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { ExerciseService } from '../application/exercise.service';

import { createExerciseDto, ExerciseResultDto, responseDto, SearchExerciseDto } from '../domain/search.exercise.dto';
import { Usersesion } from '../../auth/application/strategies/usersesion.decorator';
import { Exercise } from '../../../shared/domain/exercise.entity';


@ApiBearerAuth('acces-token')
@ApiTags('Exercise')
@Controller('exercise')
export class ExerciseController {
  constructor(private readonly _ExerciseService: ExerciseService) { }

 

  @Post('getAll')
  getAll(@Body() query: SearchExerciseDto): Promise<ExerciseResultDto> {
    return this._ExerciseService.getAll(query);
  }

  @Post()
  create(@Body() body: createExerciseDto, @Usersesion() user): Promise<responseDto> {
    body.idusergym=user.id
    return this._ExerciseService.create(body);
    
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number): Promise<Exercise> {

    return this._ExerciseService.get(id);
  }
  

 
}
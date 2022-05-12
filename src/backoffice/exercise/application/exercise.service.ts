import {
  Injectable,
  Inject,
} from '@nestjs/common';
import {  TAKE } from '../../../shared/constants';
import { FindManyOptions } from 'typeorm';
import { Exercise } from '../../../shared/domain/exercise.entity';
import { EXERCISE_REPOSITORI,IExerciseRepository } from '../domain/iexercise.repository';
import { createExerciseDto, ExerciseResultDto, responseDto, SearchExerciseDto } from '../domain/search.exercise.dto';


@Injectable()
export class ExerciseService {


  constructor(
    @Inject(EXERCISE_REPOSITORI)
    private readonly _ExerciseRepository: IExerciseRepository
  ) { }

 
  async getAll(query: SearchExerciseDto): Promise<ExerciseResultDto> {

    const skip = TAKE * (query.page - 1);      
    const _buscador = typeof (query.buscado) !== 'undefined' ? query.buscado.toLocaleString() : "";
    
  

    const conditions: FindManyOptions<Exercise> = {

      where: qb => {
        qb.where("CONCAT(IFNULL(Exercise.bodyPart,''),' ',IFNULL(Exercise.equipment,''),' ',IFNULL(Exercise.name_ejercise,''),' ',IFNULL(Exercise.target,'')) like '%"+_buscador+"%' and Exercise.estatus=1");

      },
      take: TAKE,
      skip: skip
    };


    return await this._ExerciseRepository.getAll(conditions);


  }

  async create(_Exercise: Partial<createExerciseDto>): Promise<responseDto> {

    return await this._ExerciseRepository.save(_Exercise);
  }

  async get(id: number): Promise<Exercise> {

    return await this._ExerciseRepository.findOne(id);
  }
 
}
import { InjectRepository } from "@nestjs/typeorm";

import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";

import { IExerciseRepository } from "../domain/iexercise.repository";
import { Exercise } from "../../../shared/domain/exercise.entity";
import { ExerciseRepository } from "./exercise.repository";
import { createExerciseDto, ExerciseResultDto, responseDto } from "../domain/search.exercise.dto";

import { FindManyOptions } from "typeorm";
import { UserExerciseRepository } from "./user.exercise.repository";
import { UserExercise } from "src/shared/domain/user.exercise.entity";
import { UserGym } from "src/shared/domain/user.gym.entity";

@Injectable()
export class msExerciseRepository implements IExerciseRepository {

    private readonly logger = new Logger(msExerciseRepository.name);
    constructor(
        @InjectRepository(ExerciseRepository)
        private readonly _roleExerciseRepository: ExerciseRepository,

        @InjectRepository(UserExerciseRepository)
        private readonly _userExerciseRepository: UserExerciseRepository
    ) { }

    async save(save: Partial<createExerciseDto>): Promise<responseDto> {

         const userExercise= new UserExercise();
         const _exercise= new Exercise();
         _exercise.id=save.idexercise;
         const _user= new UserGym();
         _user.id=save.idusergym;
         userExercise.exercise=_exercise;
         userExercise.userGym=_user;
         userExercise.calificacion=save.calificacion;

         await this._userExerciseRepository.save(userExercise);
         const _responseDto=new responseDto();
         _responseDto.ok="Ok";

        return _responseDto;
    }
    async findOne(Id: number): Promise<Exercise> {

        return await this._roleExerciseRepository.findOne(Id);
    }
  
    async getAll(conditions: FindManyOptions<Exercise>): Promise<ExerciseResultDto> {

        const [result, total] = await this._roleExerciseRepository.findAndCount(conditions);

        return new ExerciseResultDto(result, total);
    }

    





}
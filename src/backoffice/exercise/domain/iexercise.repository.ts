
import { FindManyOptions } from "typeorm";
import { Exercise } from "../../../shared/domain/exercise.entity";
import { createExerciseDto, ExerciseResultDto, responseDto } from "./search.exercise.dto";


export const EXERCISE_REPOSITORI = 'EXERCISE_REPOSITORI';

export interface IExerciseRepository {
    save(save: Partial<createExerciseDto>): Promise<responseDto>;
    getAll(conditions: FindManyOptions<Exercise>): Promise<ExerciseResultDto>;
    findOne(id: number): Promise<Exercise>;


}
import { Repository, EntityRepository } from 'typeorm';
import { Exercise } from '../../../shared/domain/exercise.entity';

@EntityRepository(Exercise)
export class ExerciseRepository extends Repository<Exercise> {}
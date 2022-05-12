import { UserExercise } from '../../../shared/domain/user.exercise.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(UserExercise)
export class UserExerciseRepository extends Repository<UserExercise> {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseRepository } from './infraestructure/exercise.repository';
import { UserExerciseRepository } from './infraestructure/user.exercise.repository';
import { ExerciseController } from './controller/exercise.controller';
import { ExerciseService } from './application/exercise.service';
import { msExerciseRepository } from './infraestructure/msexercise.repository';
import { EXERCISE_REPOSITORI } from './domain/iexercise.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseRepository,UserExerciseRepository])],
  providers: [ExerciseService, {
    useClass: msExerciseRepository,
    provide: EXERCISE_REPOSITORI
  }],
  controllers: [ExerciseController],
})
export class ExerciseModule {}
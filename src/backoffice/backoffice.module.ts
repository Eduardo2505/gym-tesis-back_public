import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';

import { ExerciseModule } from './exercise/exercise.module';

@Module({
  imports: [
    ExerciseModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})

export class BackofficeModule {
}

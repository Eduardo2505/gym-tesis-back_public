import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

import { Exercise } from './exercise.entity';
import { UserGym } from './user.gym.entity';

@Entity('user_exercise')
export class UserExercise {

  @PrimaryGeneratedColumn()
  id: number;

  

  @Column()
  calificacion: number;

 


  @ManyToOne(() => UserGym, userGym => userGym.userExercise)
  @JoinColumn({ name: 'idusergym' })
  userGym: UserGym;


  @ManyToOne(() => Exercise, exercise => exercise.userExercise)
  @JoinColumn({ name: 'idexercise' })
  exercise: Exercise;


  


}
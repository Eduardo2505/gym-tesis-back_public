import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity, OneToMany
} from 'typeorm';
import {  UserExercise } from './user.exercise.entity';



@Entity('user_gym')
export class UserGym extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

 
  @Column({ type: 'varchar', nullable: false })
  pass: string;

  @Column({nullable: false })
  sex: number;

  @Column({ type: 'date', name: 'fecha_nacimiento' })
  fechaNacimiento: Date;

  @OneToMany(() => UserExercise, userExercise => userExercise.userGym,{cascade: true})
  userExercise: UserExercise[];

}

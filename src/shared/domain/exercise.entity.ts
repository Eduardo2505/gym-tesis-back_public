import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity, OneToMany
} from 'typeorm';
import {  UserExercise } from './user.exercise.entity';



@Entity('exercise')
export class Exercise extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  

 
  @Column({ type: 'varchar', nullable: false })
  bodyPart: string;

  @Column({ type: 'varchar', nullable: false })
  equipment: string;

  @Column({ type: 'varchar', nullable: false })
  gifUrl: string;

  @Column({ type: 'varchar', nullable: false, name: 'name_ejercise' })
  nameEjercise: string;

  @Column({ type: 'varchar', nullable: false })
  target: string;



  @OneToMany(() => UserExercise, userExercise => userExercise.exercise,{cascade: true})
  userExercise: UserExercise[];

  @Column({nullable: false })
  estatus: number;

}

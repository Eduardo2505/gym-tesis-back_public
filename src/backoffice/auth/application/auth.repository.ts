
import { Repository, EntityRepository, getConnection } from 'typeorm';
import { SignupDto } from '../domain';

import * as bcrypt from 'bcrypt';
import { UserGym } from '../../../shared/domain/user.gym.entity';
import { Logger } from '@nestjs/common';

@EntityRepository(UserGym)
export class AuthRepository extends Repository<UserGym> {
  async signup(signupDto: SignupDto) {
    const { username, pass,fechanacimiento,sex } = signupDto;
    Logger.debug(fechanacimiento)
    const user = new UserGym();
    user.username = username;
    user.fechaNacimiento = new Date(fechanacimiento);
    user.sex = sex;

    const saltOrRounds =  await bcrypt.genSalt();
    user.pass = await bcrypt.hash(pass, saltOrRounds);

    await user.save();
  }
}
import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';


import * as bcrypt from 'bcrypt';

import { UserGym } from '../../../shared/domain/user.gym.entity';

import { IJwtPayload } from '../domain/jwt-payload.interface';
import { SigninDto, SignupDto } from '../domain';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private readonly _authRepository: AuthRepository,
    private readonly _jwtService: JwtService,
  ) { }

  async signup(signupDto: SignupDto): Promise<void> {
    const { username } = signupDto;
    const userExists = await this._authRepository.findOne({
      where: [{ username }],
    });

    if (userExists) {
      throw new ConflictException('username or email already exists');
    }

    return this._authRepository.signup(signupDto);
  }

  async signin(signinDto: SigninDto): Promise<{ token: string }> {
    const { username, pass } = signinDto;

    const user: UserGym = await this._authRepository.findOne({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException('user does not exist');
    }

    
    const isMatch = await bcrypt.compare(pass, user.pass);
    

    if (!isMatch) {
      throw new UnauthorizedException('invalid credentials');
    }

    const payload: IJwtPayload = {
      id: user.id,
      username: user.username
    };

    const token = await this._jwtService.sign(payload);

    return { token };
  }
  
}
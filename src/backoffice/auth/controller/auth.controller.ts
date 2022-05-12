import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SignupDto, SigninDto } from '../domain';
import { AuthService } from '../application/auth.service';
import { Public } from '../../../config/public.decorator'

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) { }

  @Public()
  @Post('/signup')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'User create' })
  async signup(@Body() signupDto: SignupDto): Promise<void> {
    return this._authService.signup(signupDto);
  }

  @Public()
  @Post('/signin')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
  })
  async signin(@Body() signinDto: SigninDto) {
    return this._authService.signin(signinDto);
  }
}

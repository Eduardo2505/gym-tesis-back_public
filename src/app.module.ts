import { Module } from '@nestjs/common';


import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { BackofficeModule } from './backoffice/backoffice.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './backoffice/auth/domain/at.guard';

@Module({
  imports: [ConfigModule,
    DatabaseModule,
    BackofficeModule],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: AtGuard,
  }],
})
export class AppModule {
  static port: number | string;
  static corsweb: string;
  constructor(private readonly _configService: ConfigService) {

    AppModule.port = this._configService.get(Configuration.PORT);

    AppModule.corsweb = this._configService.get(Configuration.CORS);

  }
}

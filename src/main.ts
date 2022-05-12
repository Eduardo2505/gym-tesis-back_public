import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Apilink')
    .setDescription('API description [Mi Negocio fácil]')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'acces-token')
   // .addTag('cats')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document,{
    //explorer:true,
    swaggerOptions:{
      filter :true,
      showRequestDuration:true
    }
  });


  await app.listen(AppModule.port);
  console.log('App run on port: ' + AppModule.port);
  
}
bootstrap();

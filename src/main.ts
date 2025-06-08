import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Get ConfigService instance
  const configService = app.get(ConfigService);
  
  // Enable validation pipe globally
  app.useGlobalPipes(new ValidationPipe());
  
  // Enable CORS
  app.enableCors();
  
  const port = configService.get<number>('PORT') || 3000;
  const appName = configService.get<string>('APP_NAME') || 'Books API';
  const appVersion = configService.get<string>('APP_VERSION') || '1.0.0';
  
  await app.listen(port);
  console.log(`🚀 ${appName} v${appVersion} is running on: http://localhost:${port}`);
  console.log(`📊 Environment: ${configService.get<string>('NODE_ENV')}`);
  console.log(`🗄️  Database: ${configService.get<string>('MONGODB_URI')}`);
}
bootstrap(); 
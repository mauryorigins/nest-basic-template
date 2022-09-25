import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExampleService } from './example/example.service';
import { ExampleController } from './example/example.controller';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [ConfigModule.forRoot(), ExampleModule],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class AppModule {}

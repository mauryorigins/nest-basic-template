import { Module } from '@nestjs/common';
import { ExampleService } from './example/example.service';
import { ExampleController } from './example/example.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Example, ExampleDocument } from 'src/schemas/example.schema';

@Injectable()
export class ExampleService {
  constructor(
    @InjectModel(Example.name) private exampleModel: Model<ExampleDocument>,
  ) {}

  async createUser(user: any): Promise<Example> {
    const createdUser = new this.exampleModel(user);
    return createdUser.save();
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Post('/newUser')
  generateUser(@Body() user: any) {
    return this.exampleService.createUser(user);
  }

  @Get('/info')
  getInfo() {
    return 'Hello im the example';
  }
}

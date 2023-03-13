import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsEmail()
  @Field()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsNotEmpty()
  age: number;

  @IsOptional()
  @Field()
  isSubscribed?: boolean;
}

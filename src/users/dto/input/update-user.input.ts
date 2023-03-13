import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  @IsOptional()
  age?: number;

  @IsOptional()
  @Field({ nullable: true })
  isSubscribed?: boolean;
}

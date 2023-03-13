import { Injectable } from '@nestjs/common';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { User } from './models/user';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public createUser(): User {}

  public updateUser(): User {}
  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.userId === getUserArgs.userId);
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  }

  public deleteUser(): User {}
}

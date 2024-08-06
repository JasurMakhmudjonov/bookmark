// src/user/user.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): User {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  createUser(
    @Body('fullname') fullname: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): User {
    return this.userService.createUser(fullname, email, password);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: number,
    @Body('fullname') fullname: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): User {
    return this.userService.updateUser(Number(id), fullname, email, password);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): void {
    this.userService.deleteUser(Number(id));
  }
}

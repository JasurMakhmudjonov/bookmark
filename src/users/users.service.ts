// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, fullname: 'John Doe', email: 'john.doe@example.com', password: 'password123' },
    { id: 2, fullname: 'Jane Smith', email: 'jane.smith@example.com', password: 'secret123' },
    { id: 3, fullname: 'Jane Doe', email: 'jane.doe@example.com', password: 'secret321' },

  ];
  private nextId: number = 4;

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find(user => user.id === id);
  }

  createUser(fullname: string, email: string, password: string): User {
    const user: User = {
      id: this.nextId++,
      fullname,
      email,
      password,
    };
    this.users.push(user);
    return user;
  }

  updateUser(id: number, fullname: string, email: string, password: string): User {
    const user = this.getUserById(id);
    if (user) {
      user.fullname = fullname;
      user.email = email;
      user.password = password;
    }
    return user;
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}

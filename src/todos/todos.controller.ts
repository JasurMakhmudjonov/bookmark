// src/todo/todo.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: number): Todo {
    return this.todoService.getTodoById(Number(id));
  }

  @Get('user/:userId')
  getTodosByUserId(@Param('userId') userId: number): Todo[] {
    return this.todoService.getTodosByUserId(Number(userId));
  }

  @Post()
  createTodo(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('userId') userId: number,
  ): Todo {
    return this.todoService.createTodo(title, description, Number(userId));
  }

  @Patch(':id')
  updateTodo(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('userId') userId: number,
  ): Todo {
    return this.todoService.updateTodo(Number(id), title, description, Number(userId));
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number): void {
    this.todoService.deleteTodo(Number(id));
  }
}

// src/todo/todo.service.ts
import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    { id: 1, title: 'Task 1', description: 'First task', userId: 1 },
    { id: 2, title: 'Task 2', description: 'Second task', userId: 2 },
    { id: 3, title: 'Task 3', description: 'Third task', userId: 1 },
  ];
  private nextId: number = 4;

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  getTodosByUserId(userId: number): Todo[] {
    return this.todos.filter((todo) => todo.userId === userId);
  }

  createTodo(title: string, description: string, userId: number): Todo {
    const todo: Todo = {
      id: this.nextId++,
      title,
      description,
      userId,
    };
    this.todos.push(todo);
    return todo;
  }

  updateTodo(
    id: number,
    title: string,
    description: string,
    userId: number,
  ): Todo {
    const todo = this.getTodoById(id);
    if (todo) {
      todo.title = title;
      todo.description = description;
      todo.userId = userId;
    }
    return todo;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

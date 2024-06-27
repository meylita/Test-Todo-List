import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface/interface-general.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  addTodo(): void {
    if (!this.newTodo.trim()) return;
    const todo: Todo = { id: Date.now(), title: this.newTodo, completed: false };
    this.todoService.addTodo(todo).subscribe((addedTodo: Todo) => {
      this.todos.push(addedTodo);
      this.newTodo = '';
    });
  }

  toggleTodoCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}

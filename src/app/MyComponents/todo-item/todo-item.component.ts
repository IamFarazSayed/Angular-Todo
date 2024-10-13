import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from '../../Models/todos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todo!:Todos

  @Input() i!:number

  @Output() todoDelete:EventEmitter<Todos>=new EventEmitter<Todos>();

  @Output() todoToggle:EventEmitter<Todos>=new EventEmitter<Todos>();

  constructor(){}

  onClick(todo:Todos)
  {
    this.todoDelete.emit(todo);
  
    console.log("on click Pressed " + this.todo.sno)
  }

  onCheckboxClick(todo:Todos)
  {
    this.todoToggle.emit(todo);
  }

}

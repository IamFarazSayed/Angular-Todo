import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todos } from '../../Models/todos';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  title!:string

  desc!:string

  @Output() todoAdd:EventEmitter<Todos>=new EventEmitter<Todos>();


  onSubmit()
  {

    const todo :Todos=
    {
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }

    this.todoAdd.emit(todo)

  }

}

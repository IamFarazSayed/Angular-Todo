import { Component } from '@angular/core';
import { Todos } from '../../Models/todos';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todos[]

  constructor()
  {
    // this.todos=[
    //   {
    //     sno:1,
    //     title:"This is Title 1",
    //     desc:"Description 1",
    //     active:true
    //   },
    //   {
    //     sno:2,
    //     title:"This is Title 2",
    //     desc:"Description 2",
    //     active:true
    //   },
    //   {
    //     sno:3,
    //     title:"This is Title 3",
    //     desc:"Description 3",
    //     active:true
    //   },
    // ]
    //this.todos=[]

    const localItem = localStorage.getItem("todos");
    if(localItem==null)
      this.todos=[]
    else
    {
      this.todos=JSON.parse(localItem)    
    }

    
  }

  DeleteTodo(todo:Todos)
  {
    console.log(todo)

    var indexToDelete=this.todos.indexOf(todo)

    this.todos.splice(indexToDelete,1)

    localStorage.setItem("todos",JSON.stringify(this.todos))

  }

  ToggleTodo(todo:Todos)
  {
    console.log(todo)

    var indexDone=this.todos.indexOf(todo)

    this.todos[indexDone].active=!this.todos[indexDone].active

    localStorage.setItem("todos",JSON.stringify(this.todos))

  }

  AddTodo(todo:Todos)
  {
    console.log(todo)

    this.todos.push(todo)

    localStorage.setItem("todos",JSON.stringify(this.todos))

  }

}

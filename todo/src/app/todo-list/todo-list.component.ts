import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Route, Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public completed: boolean,
    public targateDate : Date
  ){}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  todos!: Todo[]
  message!: string

  constructor(private todoService: TodoDataService, private router:Router){}

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('Loki').subscribe(
      response => {
        console.log(response)
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number){
    console.log(`Delete todo ${id}`);
    this.todoService.deleteTodo('Loki', id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of Todo ${id} successfully!`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id: number){
    console.log(`Update todo ${id}`);
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from 'src/app/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient){}

  retriveAllTodos(username:string){
    return this.http.get<Todo[]>(`http://localhost:8080/user/${username}/todos`);
  }

  deleteTodo(username:string, id: number){
    return this.http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retriveTodo(username:string, id: number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username:string, id: number, todo: Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }

  createTodo(username:string,todo: Todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo)
  }
}

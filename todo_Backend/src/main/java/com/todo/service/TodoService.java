package com.todo.service;

import com.todo.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    public static List<Todo> todos = new ArrayList<>();
    public static int idCounter = 0;

    static {
                todos.add(new Todo(++idCounter, "Loki", "Learn Java script",new Date(),false));
                todos.add(new Todo(++idCounter, "Babi", "Learn Type script",new Date(),false));
                todos.add(new Todo(++idCounter, "Loki", "Learn Angular",new Date(),false));
                todos.add(new Todo(++idCounter, "Loki", "Learn Java",new Date(),false));
    }

    
    public Todo save(Todo todo){
        if(todo.getId()==-1 || todo.getId()==0){
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }
    
    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if (todo == null) return null;
        if(todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
        for (Todo todo:todos){
            if (todo.getId() == id){
                return todo;
            }
        }
        return null;
    }
}

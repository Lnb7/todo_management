package com.todo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Objects;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    private long id;
    private String username;
    private String description;
    private Date targateDate;
    private boolean isCompleted;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id && isCompleted == todo.isCompleted && Objects.equals(username, todo.username) && Objects.equals(description, todo.description) && Objects.equals(targateDate, todo.targateDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, description, targateDate, isCompleted);
    }
}

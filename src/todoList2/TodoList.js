import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error(error));
    }, []);

    const addTodo = (text) => {
        const newTodo = { text };
        fetch('http://localhost:8080/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTodo)
        })
          .then(response => response.json())
          .then(data => setTodos([...todos, data]))
          .catch(error => console.error(error));
      };

    const updateTodo = (index, text) => {
        const newTodos = [...todos];
        newTodos[index].text = text;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(e.target.todo.value);
                e.target.todo.value = '';
            }}>
                <input name="todo" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

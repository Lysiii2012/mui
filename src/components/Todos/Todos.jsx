import React, { useState, useEffect } from "react";
import AddNewTodo from '../Todo/AddNewTodo/AddNewTodo';
import TodoList from '../Todo/TodoList/TodoList';
import ErrorBoundaries from "../ErrorBoundaries/ErrorBoundaries";

const Todo = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');  
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)); 
    }, [todos]);

    const addTodo = () => {
        if (newTodo.trim()) {
            const newTodoItem = { text: newTodo, completed: false };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const removeTodo = index => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <> 
            <h1>Todo list</h1>
            <AddNewTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
            <ErrorBoundaries>
                <TodoList todos={todos} removeTodo={removeTodo} />
            </ErrorBoundaries>
        </>
    );
};

export default Todo;

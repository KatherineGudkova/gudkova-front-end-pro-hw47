import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo("");
        }
    };

    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>TODO LIST</h1>
            <ul>
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                            onClick={() => toggleTodo(index)}
                        >
                            {todo.text}
                        </li>
                    ))}
            </ul>
            <div class="new-note">
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="New note..."
                />
                <button onClick={addTodo}>ADD</button>
            </div>
        </div>
    );
};

export default TodoList;

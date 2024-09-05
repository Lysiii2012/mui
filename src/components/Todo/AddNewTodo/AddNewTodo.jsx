import React from "react";
import Button from "@mui/material/Button";

const AddNewTodo = ({ newTodo, setNewTodo, addTodo }) => {
    return (
        <div className="top-todo">
            <input
                type="text"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                placeholder="What I need"
            />
            <Button variant="contained"onClick={addTodo}>Add Todo item</Button> 
        </div>
    );
};

export default AddNewTodo;

import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          disableGutters
          secondaryAction={
            <IconButton aria-label="delete" onClick={() => removeTodo(index)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={todo.text}
            sx={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;


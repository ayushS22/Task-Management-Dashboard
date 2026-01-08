// useState is used for local component state
import { useState } from "react";

// useDispatch is used to send actions to Redux store
import { useDispatch } from "react-redux";

// Import Redux actions for delete, toggle and edit task
import { deleteTask, toggleTask, editTask } from "../features/tasks/tasksSlice";

// Import required Material UI components
import {
  ListItem,
  Checkbox,
  IconButton,
  TextField,
} from "@mui/material";

// Import delete icon
import DeleteIcon from "@mui/icons-material/Delete";

// TaskItem component represents a single task
// task is received as prop from parent component
export default function TaskItem({ task }) {

  // dispatch is used to call Redux actions
  const dispatch = useDispatch();

  // edit is used to check whether task is in edit mode or not
  const [edit, setEdit] = useState(false);

  // title stores updated task title while editing
  const [title, setTitle] = useState(task.title);

  return (
    // ListItem represents one row in the task list
    <ListItem>

      {/* Checkbox is used to mark task completed or pending */}
      <Checkbox
        checked={task.completed}

        // When checkbox is clicked, toggle task status
        onChange={() => dispatch(toggleTask(task.id))}
      />

      {/* If edit mode is true, show input box */}
      {edit ? (
        <TextField
          value={title}

          // Update title state while typing
          onChange={(e) => setTitle(e.target.value)}

          // When input loses focus, save edited task
          onBlur={() => {
            dispatch(editTask({ id: task.id, title }));
            setEdit(false); // exit edit mode
          }}
          size="small"
        />
      ) : (
        // If not editing, show task title as text
        <span
          // Double click on text to enable edit mode
          onDoubleClick={() => setEdit(true)}
        >
          {task.title}
        </span>
      )}

      {/* Delete button to remove task */}
      <IconButton
        onClick={() => dispatch(deleteTask(task.id))}
      >
        <DeleteIcon />
      </IconButton>

    </ListItem>
  );
}

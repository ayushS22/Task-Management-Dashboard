// Import TextField and Button from Material UI
// TextField → input box
// Button → add task button
import { TextField, Button } from "@mui/material";

// useState is used to store the input value
import { useState } from "react";

// useDispatch is used to send actions to Redux store
import { useDispatch } from "react-redux";

// addTask action is used to add new task
import { addTask } from "../features/tasksSlice";

// This component is used to create a new task
export default function TaskForm() {

  // title stores the text typed by user
  // setTitle is used to update the title
  const [title, setTitle] = useState("");

  // dispatch is used to call Redux actions
  const dispatch = useDispatch();

  // This function runs when Add Task button is clicked
  const handleAdd = () => {

    // trim() removes extra spaces
    // check if input is not empty
    if (title.trim()) {

      // send task title to Redux to add task
      dispatch(addTask(title));

      // clear input box after task is added
      setTitle("");
    }
  };

  return (
    <>
      {/* Input box to enter task title */}
      <TextField
        label="Task Title"
        fullWidth

        // value comes from React state
        value={title}

        // update state whenever user types
        onChange={e => setTitle(e.target.value)}
      />

      {/* Button to add task */}
      <Button
        sx={{ mt: 1 }}      // margin from top
        variant="contained"
        onClick={handleAdd} // call handleAdd function
      >
        Add Task
      </Button>
    </>
  );
}

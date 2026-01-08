// Import required Material UI components to show list and buttons
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

// Import icons for delete, edit and complete actions
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

// useSelector is used to get data from Redux store
// useDispatch is used to send actions to Redux store
import { useSelector, useDispatch } from "react-redux";

// Import Redux actions to update and delete task
import { updateTask, deleteTask } from "../features/tasksSlice";

// This component shows the list of all tasks
export default function TaskList() {

  // Get tasks, filter and search values from Redux store
  const { tasks, filter, search } = useSelector(state => state.tasks);

  // dispatch is used to call Redux actions
  const dispatch = useDispatch();

  // Filter tasks based on selected filter and search text
  const filteredTasks = tasks.filter(task => {

    // Check task status based on filter value
    const statusMatch =
      filter === "all" ||                         // show all tasks
      (filter === "completed" && task.completed) || // only completed
      (filter === "pending" && !task.completed);    // only pending

    // Return true if both status and search match
    return (
      statusMatch &&
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    // List component to show all tasks
    <List>

      {/* Loop through filtered tasks */}
      {filteredTasks.map(task => (
        <ListItem
          key={task.id}  // unique key for each task

          // Secondary actions shown on right side
          secondaryAction={
            <>
              {/* Edit task title */}
              <IconButton
                onClick={() =>
                  dispatch(
                    updateTask({
                      ...task,

                      // prompt is used to get updated title
                      title: prompt("Edit task", task.title),
                    })
                  )
                }
              >
                <EditIcon />
              </IconButton>

              {/* Toggle task completed / pending */}
              <IconButton
                onClick={() =>
                  dispatch(
                    updateTask({
                      ...task,
                      completed: !task.completed,
                    })
                  )
                }
              >
                <CheckIcon />
              </IconButton>

              {/* Delete task */}
              <IconButton
                onClick={() => dispatch(deleteTask(task.id))}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          {/* Show task title and status */}
          <ListItemText
            primary={task.title}
            secondary={task.completed ? "Completed" : "Pending"}
          />
        </ListItem>
      ))}
    </List>
  );
}

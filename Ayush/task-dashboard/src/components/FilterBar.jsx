// Import required UI components from Material UI
// Button is used for filter options
// TextField is used for search input
// Stack is used to arrange items in a row
import { Button, TextField, Stack } from "@mui/material";

// useDispatch is used to send actions to Redux store
import { useDispatch } from "react-redux";

// Import Redux actions to update filter and search value
import { setFilter, setSearch } from "../features/tasksSlice";

// FilterBar component handles filtering and searching of tasks
export default function FilterBar() {

  // dispatch helps us send actions to Redux
  const dispatch = useDispatch();

  return (
    // Stack is used instead of div for better layout
    // direction="row" means items will be in one line
    // spacing={1} gives space between items
    // mt={2} gives margin from top
    <Stack direction="row" spacing={1} mt={2}>

      {/* When this button is clicked,
          it sets filter value to "all" in Redux */}
      <Button onClick={() => dispatch(setFilter("all"))}>
        All
      </Button>

      {/* When clicked, show only completed tasks */}
      <Button onClick={() => dispatch(setFilter("completed"))}>
        Completed
      </Button>

      {/* When clicked, show only pending tasks */}
      <Button onClick={() => dispatch(setFilter("pending"))}>
        Pending
      </Button>

      {/* TextField is used to search tasks by title */}
      <TextField
        size="small"
        placeholder="Search"

        // Every time user types,
        // search value is updated in Redux store
        onChange={e => dispatch(setSearch(e.target.value))}
      />
    </Stack>
  );
}

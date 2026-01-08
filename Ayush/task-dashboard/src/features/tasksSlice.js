// Import helper functions from Redux Toolkit
// createSlice -> used to create reducer + actions in one place
// createAsyncThunk -> used for async API calls
// nanoid -> used to generate unique id for tasks
import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

// Import mock API functions (fake backend)
import {
  fetchTasks,
  addTaskApi,
  updateTaskApi,
  deleteTaskApi,
} from "../api/mockApi";

/* ---------- ASYNC THUNKS (API CALLS) ---------- */

// This thunk is used to load all tasks when app starts
// It works like GET /tasks API
export const loadTasks = createAsyncThunk(
  "tasks/load",               // action type name
  async () => await fetchTasks() // call mock API
);

// This thunk is used to add a new task
// It works like POST /tasks API
export const addTask = createAsyncThunk(
  "tasks/add",
  async title => {
    // create a new task object
    const task = {
      id: nanoid(),           // generate unique id
      title,                  // task title from UI
      completed: false        // default status
    };

    // send task to mock API and return result
    return await addTaskApi(task);
  }
);

// This thunk is used to update an existing task
// It works like PUT /tasks/:id API
export const updateTask = createAsyncThunk(
  "tasks/update",
  async task => await updateTaskApi(task)
);

// This thunk is used to delete a task
// It works like DELETE /tasks/:id API
export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async id => await deleteTaskApi(id)
);

/* ---------- REDUX SLICE ---------- */

// Create tasks slice
// Slice contains state + reducers + extraReducers
const tasksSlice = createSlice({
  name: "tasks", // name of this slice

  // Initial state of the application
  initialState: {
    tasks: [],        // list of all tasks
    filter: "all",    // filter type (all / completed / pending)
    search: "",       // search text
    status: "idle",   // API status (optional)
  },

  // Normal reducers (no API calls)
  reducers: {
    // This reducer updates the filter value
    setFilter(state, action) {
      state.filter = action.payload;
    },

    // This reducer updates the search text
    setSearch(state, action) {
      state.search = action.payload;
    },
  },

  // extraReducers handles async thunk results
  extraReducers: builder => {
    builder
      // When loadTasks API is successful
      .addCase(loadTasks.fulfilled, (state, action) => {
        // save fetched tasks into state
        state.tasks = action.payload;
      })

      // When addTask API is successful
      .addCase(addTask.fulfilled, (state, action) => {
        // add new task to tasks array
        state.tasks.push(action.payload);
      })

      // When updateTask API is successful
      .addCase(updateTask.fulfilled, (state, action) => {
        // find index of task to update
        const i = state.tasks.findIndex(
          t => t.id === action.payload.id
        );

        // replace old task with updated task
        state.tasks[i] = action.payload;
      })

      // When deleteTask API is successful
      .addCase(deleteTask.fulfilled, (state, action) => {
        // remove task whose id matches deleted id
        state.tasks = state.tasks.filter(
          t => t.id !== action.payload
        );
      });
  },
});

// Export normal actions to use in components
export const { setFilter, setSearch } = tasksSlice.actions;

// Export reducer to use in Redux store
export default tasksSlice.reducer;

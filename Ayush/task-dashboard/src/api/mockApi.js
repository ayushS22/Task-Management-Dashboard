// This array works like a small database of tasks
// All add, update, delete operations happen on this array
let tasks = [
  { id: "1", title: "Learn React", completed: false },
  { id: "2", title: "Learn Redux Toolkit", completed: true },
];

// ---------------- FETCH TASKS ----------------

// This function is used to get all tasks
// It behaves like a GET API
export const fetchTasks = () =>
  new Promise(resolve => {
    // setTimeout is used to simulate API delay
    setTimeout(() => {
      // return a copy of tasks so original array is safe
      resolve([...tasks]);
    }, 500);
  });

// ---------------- ADD TASK ----------------

// This function is used to add a new task
// It behaves like a POST API
export const addTaskApi = task =>
  new Promise(resolve => {
    setTimeout(() => {
      // push new task into tasks array
      tasks.push(task);

      // return the added task
      resolve(task);
    }, 300);
  });

// ---------------- UPDATE TASK ----------------

// This function is used to update an existing task
// It behaves like a PUT API
export const updateTaskApi = task =>
  new Promise(resolve => {
    setTimeout(() => {
      // loop through all tasks using map
      // if task id matches, replace it with updated task
      // otherwise keep old task
      tasks = tasks.map(t => (t.id === task.id ? task : t));

      // return updated task
      resolve(task);
    }, 300);
  });

// ---------------- DELETE TASK ----------------

// This function is used to delete a task
// It behaves like a DELETE API
export const deleteTaskApi = id =>
  new Promise(resolve => {
    setTimeout(() => {
      // filter removes the task whose id matches
      // keep all tasks whose id is NOT equal to given id
      tasks = tasks.filter(t => t.id !== id);

      // return deleted task id
      resolve(id);
    }, 300);
  });

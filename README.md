# Task-Management-Dashboard
Hi, this is Ayush. I develop Task Management Dashboard.

📌 Task Management Dashboard
A simple Task Management Dashboard built using React.js, Redux Toolkit, and Material UI.
This project demonstrates core React concepts, state management, mock API handling, and clean UI design.
________________________________________
🚀 Features
•	Display list of tasks
•	Add new task (title required)
•	Edit existing task
•	Delete task
•	Mark task as Completed / Pending
•	Filter tasks (All / Completed / Pending)
•	Search tasks by title
•	Mock API using static data (simulated backend)
•	Light / Dark theme toggle
•	Responsive UI using Material UI
________________________________________
🛠️ Tech Stack
•	Frontend: React.js (Functional Components & Hooks)
•	State Management: Redux Toolkit
•	UI Library: Material UI (MUI)
•	Mock API: Static data with Promise & setTimeout
•	Build Tool: Vite
________________________________________
📁 Project Structure
src/
│── api/
│   └── mockApi.js        # Mock backend API
│
│── app/
│   └── store.js          # Redux store
│
│── features/
│   └── tasksSlice.js     # Redux slice + async thunks
│
│── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── FilterBar.jsx
│   └── ThemeToggle.jsx
│
│── App.jsx
│── main.jsx
________________________________________
⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone <your-github-repo-link>
cd task-dashboard
2️⃣ Install Dependencies
npm install
3️⃣ Run the Application
npm run dev
4️⃣ Open in Browser
________________________________________
🧪 Mock API Explanation
•	No real backend is used
•	A mock API is created in mockApi.js
•	API calls are simulated using Promise and setTimeout
•	Redux createAsyncThunk is used to handle async operations
________________________________________
🎨 Theme Support
•	Light and Dark theme toggle
•	Implemented using Material UI ThemeProvider
•	Theme updates instantly

________________________________________
✅ Author
Ayush Sahu





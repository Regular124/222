import { useState } from "react"

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [openSection, setOpenSection] = useState({
    taskList: false,
    tasks: true,
    completedTask: true,
  })
  function toggleSection(section) {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }
  function addTask(task) {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  }
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }
  function completeTask(id) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: true }
      : task)));
  }

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button
          className={`close-button ${openSection.taskList ? "open" : ""}`}
          onClick={() => toggleSection("taskList")}
        >+</button>
        {openSection.taskList && <TaskForm addTask={addTask} />}
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <button
          className={`close-button ${openSection.tasks ? "open" : ""}`}
          onClick={() => toggleSection("tasks")}
        >+
        </button>
        <div className="sort-controls">
          <button className="sort-button">by date</button>
          <button className="sort-button"> by priority</button>
        </div>
        {openSection.tasks && <TaskList completeTask={completeTask} deleteTask={deleteTask} activeTasks={activeTasks} />}
      </div>

      <div className="completed-task-container">
        <h2>kompleted tasks</h2>
        <button className={`close-button ${openSection.completedTask ? "open" : ""}`}
          onClick={() => toggleSection("completedTask")}
        >+</button>
        {openSection.completedTask && <CompletedTasklist completeTask={completeTask} />}
      </div>
      <Footer />
    </div>
  );
}


function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() && deadline) {
      addTask({ title, priority, deadline, })
      setTitle("")
      setPriority("Low")
      setDeadline("")
    }
  }

  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Task title"
        required
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <select value={priority} required onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="datetime-local"
        required
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">add task</button>
    </form>
  );
}

function TaskList({ activeTasks, deleteTask, completedTasks }) {
  return (
    <ul className="task-list">
      {activeTasks.map((task) =>
      (<TaskItem completeTask={completedTasks} deleteTask={deleteTask}
        task={task} key={task.id} />
      ))}
    </ul>
  );
}

function CompletedTasklist({ completedTasks }) {
  return (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}


function TaskItem({ task, deleteTask, completedTasks }) {
  const { title, priority, deadline, id } = task;

  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {title} <strong>{priority}</strong>
        </div>
        <div className="task-deadline">Due: {new Date(deadline).toLocaleString()}</div>
      </div>
      <div className="task-buttons">
        <button className="complete-button" onClick={() => completeTask(id)}>Complete</button>
        <button className="delete-button" onClick={() => deleteTask(id)}>Delete</button>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        tech
      </p>
    </footer>
  );
}
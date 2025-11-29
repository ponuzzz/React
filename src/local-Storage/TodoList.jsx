import React, { useState, useEffect } from "react";
import "./todo.css";

function TodoList() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = () => {
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  
  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  
  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  
  const saveEdit = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, text: editingText } : task
    );
    setTasks(updated);
    setEditingId(null);
    setEditingText("");
  };

  
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>

      <div className="add-area">
        <input
          type="text"
          placeholder="Enter task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <h2 className="section-title">Tasks</h2>

      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            
            
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />

            
            {editingId === task.id ? (
              <div className="edit-area">
                <input
                  type="text"
                  className="edit-input"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />

                <button className="save-btn" onClick={() => saveEdit(task.id)}>
                  Save
                </button>

                <button className="cancel-btn" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span className={task.completed ? "completed-text" : ""}>
                  {task.text}
                </span>

                <span
                  className={`status ${task.completed ? "green" : "yellow"}`}
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>

                <div className="actions">
                  <button className="edit-btn" onClick={() => startEdit(task)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;

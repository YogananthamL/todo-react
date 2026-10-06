import { useEffect, useState } from 'react';
import api from './services/api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/tasks/');
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Unable to load tasks. Check if the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (title) => {
    if (!title.trim()) return;

    try {
      await api.post('/tasks/', { title, completed: false });
      await fetchTasks();
    } catch (err) {
      setError('Unable to add task.');
    }
  };

  const handleToggleTask = async (taskId, completed) => {
    try {
      await api.patch(`/tasks/${taskId}/`, { completed: !completed });
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === taskId ? { ...task, completed: !completed } : task
        )
      );
      setError('');
    } catch (err) {
      setError('Unable to update the task.');
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}/`);
      setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
      setError('');
    } catch (err) {
      setError('Unable to delete task.');
    }
  };

  return (
    <div className="app-shell">
      <div className="todo-card">
        <header className="todo-header">
          <h1>Todo List</h1>
        </header>

        <TaskForm onSubmit={handleAddTask} />

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <p className="status-text">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;

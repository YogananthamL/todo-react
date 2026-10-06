import { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a new task"
        aria-label="Task title"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;

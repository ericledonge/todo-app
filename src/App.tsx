import './App.css';

import React, { useState } from 'react';

import { addTodo, TodoList } from './domain/services';

function App(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoList>([
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ]);

  const handleClick = () => {
    setTodoList(addTodo(todoList, { title: 'Todo 3' }));
  };

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
}

export default App;

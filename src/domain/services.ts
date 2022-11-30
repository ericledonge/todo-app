export type Todo = {
  title: string;
};

export type TodoList = Todo[];

export const addTodo = (todoList: TodoList, todo: Todo): TodoList => {
  return [...todoList, todo];
};

import { addTodo, Todo, TodoList } from './services';

describe('addTodo', () => {
  it('should add a todo in a todolist', () => {
    const myTodoList: TodoList = [];
    const aTodo: Todo = { title: 'aTodo' };

    const newTodoList = addTodo(myTodoList, aTodo);

    expect(newTodoList).toContain(aTodo);
  });
});

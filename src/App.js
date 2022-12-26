import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useReducer, useRef } from 'react';

function createTooLot() {
  let list = [];
  for (let index = 0; index < 2500; index++) {
    const element = {
      id: index,
      text: `Dummy ${index}`,
      checked: true,
    };
    list = [...list, element];
  }
  return list;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createTooLot);
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo: todo });
    nextId.current += 1;
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({ type: 'DELETE', id: id });
  }, []);

  const onToggle = useCallback((id, checked) => {
    dispatch({ type: 'TOGGLE', id: id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <>
      <div className="TodoList">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </>
  );
};

export default React.memo(TodoList);

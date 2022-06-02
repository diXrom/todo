import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const createTodoList = (arr, deleteItem, toggleImportant, toggleDone) => arr.map(({ id, ...items }) => (
  <li className='list-group-item' key={id}>
    <TodoListItem {...items} 
      toggleImportant={() => toggleImportant(id)}
      toggleDone={() => toggleDone(id)}
      deleteItem={() => deleteItem(id)} />
  </li>
)
);
const TodoList = ({ data, deleteItem, toggleImportant, toggleDone }) => (
  <ul className='list-group todo-list'>
    {createTodoList(data, deleteItem, toggleImportant, toggleDone)}
  </ul>
);
export default TodoList;
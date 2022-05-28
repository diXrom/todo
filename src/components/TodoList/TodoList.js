import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const createTodoList = (arr) => arr.map(({ id, ...item }) => {
  return <li className="list-group-item" key={id}><TodoListItem {...item} /></li>
})
const TodoList = ({ data }) => <ul className="list-group todo-list">{createTodoList(data)}</ul>
export default TodoList
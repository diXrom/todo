import './TodoListItem.css';

const styles = (bool) => (bool ? { color: 'red', fontWeight: 'bold' } : null)
const TodoListItem = ({ label, important }) => {
  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={styles(important)}>
        {label}
      </span>

      <button type="button"
        className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
        className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};
export default TodoListItem;
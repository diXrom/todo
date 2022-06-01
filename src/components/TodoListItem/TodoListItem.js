import { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  /*  state = { done: false, important: false };
  setDone = () => this.setState(({ done }) => ({ done: !done }));
  setImportant = () => this.setState(({ important }) =>({ important: !important }));
   */
  setClasses = (done, important) => `todo-list-item${done ? ' done' : ''}${important ? ' important' : ''}`;
  render() {
    const { label, done, important, deleteItem, toggleImportant, toggleDone } = this.props;
    return (
      <span className={this.setClasses(done, important)}>
        <label>
          <input className='checkbox' onClick={toggleDone} type='checkbox' />
          <span className='todo-list-item-label'> {label} </span>
        </label>
        <button type='button'
          onClick={toggleImportant}
          className='btn btn-outline-success btn-sm float-right'>
          <i className='fa fa-exclamation' />
        </button>
        <button type='button'
          onClick={deleteItem}
          className='btn btn-outline-danger btn-sm float-right'>
          <i className='fa fa-trash-o' />
        </button>
      </span>
    );
  }
}
import { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  setClasses = (done, important) =>
    `todo-list-item${done ? ' done' : ''}${important ? ' important' : ''}`;
  render() {
    const { label, done, important, deleteItem, toggleImportant, toggleDone } = this.props;
    return (
      <span className={this.setClasses(done, important)}>
        <label>
          <input className='checkbox'
            onClick={toggleDone} type='checkbox'
            defaultChecked={done} />
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
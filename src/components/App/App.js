import { Component } from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import FormAddItem from '../FormAddItem';
import './App.css';

export default class App extends Component {

  state = {
    listData: ['Learn React', 'Love React', 'Live React']
      .map((str, i) => this.creteItem(i, str)),
  };
  creteItem(id, label) {
    return { id: id, label: label, done: false, important: false };
  }
  toggleItem(arr, id, prop) {
    return arr.map(list =>
      list.id === id ? { ...list, [prop]: !list[prop] } : list);
  }
  deleteCurentItem = (id) => {
    this.setState(({ listData }) => (
      { listData: listData.filter(list => list.id !== id) }
    ));
  };
  addNewItem = (value) => {
    this.setState(({ listData }) => (
      { listData: [...listData, this.creteItem(listData.length, value)] }
    ));
  };
  toggleProp = (id, prop) => {
    this.setState(({ listData }) => (
      { listData: this.toggleItem(listData, id, prop) }
    ));
  };
  getSumTask = (isDone) => {
    return this.state.listData
      .filter(list => isDone ? list.done : !list.done).length;
  };
  render() {
    return (
      <div className='todo-app' >
        <AppHeader toDo={this.getSumTask(false)} done={this.getSumTask(true)} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          data={this.state.listData}
          toggleImportant={(id) => this.toggleProp(id, 'important')}
          toggleDone={(id) => this.toggleProp(id, 'done')}
          deleteItem={(id) => this.deleteCurentItem(id)} />
        <FormAddItem addNewItem={(value) => this.addNewItem(value)} />
      </div>
    );
  }
};


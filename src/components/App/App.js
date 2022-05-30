import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import './App.css';

const listData = [
  { id: 1, label: 'Learn React' },
  { id: 2, label: 'Love React', important: true },
  { id: 3, label: 'Live React' },
];
const App = () => {
  return (
    <div className='todo-app'>
      <AppHeader toDo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList data={listData} />
    </div>
  );
};

export default App;
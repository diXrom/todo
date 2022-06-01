import { Component } from 'react';
import './SearchPanel.css';

export default class TodoInput extends Component {
  state = { label: '' };
  searchTask = (e) => {
    this.setState({ label: e.target.value });
    this.props.searchTask(e.target.value);
  };
  render() {
    return (
      <input
        onChange={this.searchTask}
        value={this.state.label}
        className='form-control search-input'
        type='text'
        placeholder='Type to search'
      />);
  }
}



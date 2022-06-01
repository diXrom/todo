import { Component } from 'react';
import './FormAddItem.css';

export default class FormAddItem extends Component {
  state = { label: '' };
  changeLabel = (e) => this.setState({ label: e.target.value });
  setSubmit = (e) => {
    e.preventDefault();
    if (!this.state.label.length) return;
    this.props.addNewItem(this.state.label);
    this.setState({ label: '' });
  };
  render() {
    return (
      <form
        onSubmit={this.setSubmit}
        className='item-add-form d-flex'>
        <input
          onChange={this.changeLabel}
          value={this.state.label}
          type='text'
          className='form-control'
          placeholder='Task...' />
        <button
          className='btn btn-info'>Add new task
        </button>
      </form>
    );
  }
}
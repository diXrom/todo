import { Component } from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  createStateBtn = (first) => ({
    all: first,
    active: false,
    done: false,
  });
  cnangeActive = (prop) => {
    this.props.statusTask(prop);
    this.setState({ ...this.createStateBtn(false), [prop ? prop : 'all']: true });
  };
  isActive = (prop) => this.state[prop] ? ' btn-info' : ' btn-outline-secondary';
  state = this.createStateBtn(true);
  render() {
    return (
      <div className='btn-group'>
        <button type='button'
          onClick={() => this.cnangeActive('')}
          className={`btn${this.isActive('all')}`}>All
        </button>
        <button type='button'
          onClick={() => this.cnangeActive('active')}
          className={`btn${this.isActive('active')}`}>Active
        </button>
        <button type='button'
          onClick={() => this.cnangeActive('done')}
          className={`btn${this.isActive('done')}`}>Done
        </button>
      </div>
    );
  }
}
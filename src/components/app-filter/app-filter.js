import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component  {
  constructor (props) {
    super(props);
    this.state = {
      filter: ''
    }
  }
  onFilterSelect = (filter) => {
    this.setState({filter});
    this.props.onFilterSelect(filter);
  }

  render() {
    return (
      <div className='btn-group'>
        <button 
          className='btn btn-light'
          type='button'
          onClick={() => this.onFilterSelect('all')}
          >
            Все сотрудники
        </button>
        <button 
          className='btn btn-outline-light'
          type='button'
          onClick={() => this.onFilterSelect('rise')}
          >
            Сотрудники на повышение
        </button>
        <button 
          className='btn btn-outline-light'
          type='button'
          onClick={() => this.onFilterSelect('moreThen1000')}
          >
            З/П больше 1000$
        </button>
      </div>
    )}
}

export default AppFilter;
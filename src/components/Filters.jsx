import React, { PropTypes } from 'react'
import Filter from './Filter';

class Filters extends React.Component {
  render() {
    return (
      <ul>
        {this.props.filters.map(filter => (
          <li key={filter.id}>
            <Filter text={filter.text} id={filter.id} onFilterClick={this.props.onFilterClick} />
          </li>
        ))}
      </ul>
    );
  }
}


Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onFilterClick: PropTypes.func.isRequired,
}

export default Filters;

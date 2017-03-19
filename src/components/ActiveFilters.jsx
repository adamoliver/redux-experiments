import React, { PropTypes } from 'react';
import ActiveFilter from './ActiveFilter';

class ActiveFilters extends React.Component {
  constructor(props) {
    super(props);
  }
  onFilterClick() {
    console.log('clicked');
  }
  render() {
    return (
      <ul>
        {this.props.filters.map(filter => (
          <li key={filter.id}>
            <ActiveFilter text={filter.text} id={filter.id} />
          </li>
        ))}
      </ul>
    );
  }
}


ActiveFilters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default ActiveFilters

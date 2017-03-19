import React, { PropTypes } from 'react';

const Filter = ({ id, text, onFilterClick }) => (
  <div>
    <label htmlFor={`filter-${id}`}>{text}</label>
    <input name={`filter-${id}`} type="checkbox" onClick={() => onFilterClick(id, text)} value={text} />
  </div>
)

Filter.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
}

export default Filter;

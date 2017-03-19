import React, { PropTypes } from 'react'

const ActiveFilter = ({ id, text }) => (
  <span>{text}</span>
)

ActiveFilter.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ActiveFilter;

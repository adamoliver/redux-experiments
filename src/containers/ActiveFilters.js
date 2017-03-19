import { connect } from 'react-redux'
import ActiveFiltersComponent from '../components/ActiveFilters'

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

const ActiveFilters = connect(
  mapStateToProps,
)(ActiveFiltersComponent)

export default ActiveFilters;

import { connect } from 'react-redux'
import { toggleFilter } from '../actions'
import FiltersComponent from '../components/Filters'

const filters = [
  {
    id: '1',
    text: 'Filter 1',
  },
  {
    id: '2',
    text: 'Filter 2',
  },
];

const mapStateToProps = (state) => {
  return {
    filters: filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterClick: (id, text) => {
      dispatch(toggleFilter(id, text))
    }
  }
}

const Filters = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersComponent)

export default Filters
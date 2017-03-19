import { combineReducers } from 'redux'
import filters from './filters'

const searchApp = combineReducers({
  filters
})

export default searchApp
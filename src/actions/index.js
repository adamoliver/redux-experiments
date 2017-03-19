import uuid from 'uuid';

export const addFilter = (text) => {
  return {
    type: 'ADD_FILTER',
    id: uuid(),
    text
  }
}

export const toggleFilter = (id, text) => {
  return {
    type: 'TOGGLE_FILTER',
    id,
    text
  }
}
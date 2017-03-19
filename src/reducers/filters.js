const filter = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return {
        id: action.id,
        text: action.text,
      };
    case 'TOGGLE_FILTER':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state;
  }
}

const filters = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return [
        ...state,
        filter(undefined, action),
      ]
    case 'TOGGLE_FILTER':
      const index = state.map((s) => {
        return s.id
      }).indexOf(action.id);

      if (index === -1) {
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
          }
        ]
      }
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ]
    default:
      return state;
  }
}

export default filters;

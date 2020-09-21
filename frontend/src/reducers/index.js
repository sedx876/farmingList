const initialState = [];

const items = (state = {items: initialState}, action) => {
  const {payload} = action;
  switch (action.type) {
    case 'CREATE_ITEM': {
      return {
        items: state.items.concat(action.payload)
      }
    }
    case 'EDIT_ITEM': {
      return {
        items: state.items.map((item) => {
          if (item.id === payload.id) {
            return Object.assign({}, item, payload.params)
          }
          return item
        })
      }
    }
    case 'REMOVE_ITEM': {
      return {
        items: state.items.filter((item) => item.id !== action.id),
      }
    }
    default:
      return state
  }
}

export default items
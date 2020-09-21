export const EDIT_ITEM = 'EDIT_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM'

export const editItem = (id, params = {}) => {
  return {
    type: 'EDIT_ITEM',
    payload: {
      id,
      params,
    }
  }
}

export const createItem = ({name}) => {
  return {
    type: 'CREATE_ITEM',
    payload: {
      name,
      status: 'Looking',
    }
  }
}

export const deleteItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    id,
  }
}
import {resetFarmingListForm} from './farmingListForm'

export const setMyFarmingList = items => {
  return {
    type: 'SET_MY_FARMING_LIST',
    items
  }
}

export const clearItems = () => {
  return {
    type: 'CLEAR_ITEMS'
  }
}

export const deleteItemSuccess = itemId => {
  return {
    type: 'DELETE_ITEM',
    itemId
  }
}

export const updateItemSuccess = item => {
  return {
    type: 'UPDATE_ITEM',
    item
  }
}

export const addItem = item => {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export const getMyItems = () => {
  return dispatch => {
    return fetch('http://localhost:3001/items', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setMyFarmingList(response.data))
      }
    })
    .catch(console.log)
  }
}

export const createItem = (itemData, history) => {
  return dispatch => {
    const sendableItemData = {
      name: itemData.name
    }
    return fetch('http://localhost:3001/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendableItemData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addItem(resp.data))
        dispatch(resetFarmingListForm())
        history.push(`/items/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}

export const updateItem = (itemData, history) => {
  return dispatch => {
    const sendableItemData = {
      name: itemData.name
    }
    return fetch(`http://localhost:3001/items/${itemData.itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendableItemData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(updateItemSuccess(resp.data))
        history.push(`/items/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}

export const deleteItem = (itemId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(r => r.json)
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(deleteItemSuccess(itemId))
        history.push(`/items`)
      }
    })
    .catch(console.log)
  }
}
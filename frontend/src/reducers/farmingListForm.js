const initialState = {
  name: '',
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'RESET_NEW_ITEM_FORM':
      return initialState
    case 'UPDATE_NEW_ITEM_FORM':
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
    case 'SET_FARMING_FORM_DATA_FOR_EDIT':
      return action.itemFormData
    default:
        return state
  }
}
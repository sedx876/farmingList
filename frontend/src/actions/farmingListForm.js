export const updateFarmingListForm = (name, value) => {
  const formData = { name, value}
  return {
    type: 'UPDATE_NEW_ITEM_FORM',
    formData
  }
}

export const resetFarmingListForm = () => {
  return {
    type: 'RESET_NEW_ITEM_FORM'
  }
}

export const setFarmingFormDataForEdit = item => {
  const itemFormData = {
    name: item.attributes.name
  }
  return {
    type: 'SET_FARMING_FORM_DATA_FOR_EDIT',
    itemFormData
  }
}
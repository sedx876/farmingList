import React from 'react'
import FarmingListForm from './FarmingListForm'
import {updateItem, deleteItem} from '../actions/myFarmingList'
import {setFarmingFormDataForEdit, resetFarmingListForm} from '../actions/farmingListForm'
import {connect} from 'react-redux'

class EditItemFormWrapper extends React.Component {
  componentDidMount() {
    this.props.item && this.props.setFarmingFormDataForEdit(this.props.item)
  }

  componentDidUpdate(prevProps) {
    this.props.item && !prevProps.item && this.props.setFarmingFormDataForEdit(this.props.item)
  }

  componentWillUnmount() {
    this.props.resetFarmingListForm()
  }

  handleSubmit = (formData) => {
    const {updateItem, item, history} = this.props
    updateItem({
      ...formData,
      itemId: item.id
    }, history)
  }

  render() {
    const {deleteItem, item, history} = this.props 
    const itemId = item ? item.id : null
    return <>
      <FarmingListForm editMode handleSubmit={this.handleSubmit} />
      <button className="btn btn-outline-danger" onClick={() => deleteItem(itemId, history)}>Delete this Item</button>
    </>
  }
}

export default connect(null, { updateItem, setFarmingFormDataForEdit, resetFarmingListForm, deleteItem })(EditItemFormWrapper)
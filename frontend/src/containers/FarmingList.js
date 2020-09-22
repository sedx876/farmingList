import React from 'react'
import ItemCard from '../components/ItemCard'
import FarmingListForm from '../components/FarmingListForm'

class FarmingList extends React.Component {
  render() {
    return (
      <>
      <FarmingListForm />
      <ItemCard />
      </>
    )
  }
}

export default FarmingList
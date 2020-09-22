import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



const MyFarmingList = props => {
  const itemCards = props.items.length > 0 ?
  props.items.map(i => (
    <p className="card border-info mb-3" id="iCard" key={i.id}><Link to={`/items/${i.id}`}>{i.attributes.name}</Link></p>)) : 
    null

  return itemCards
}

const mapStateToProps = state => {
  return {
    items: state.myFarmingList
  }
}

export default connect(mapStateToProps)(MyFarmingList)
import React from 'react'

const ItemCard = ({ item }) => {
  return (
    <div className="card border-info mb-3">
      <div className="card-header"><h3><span>{item.attributes.name}</span></h3>
      </div>
    </div>
  )
}

export default ItemCard
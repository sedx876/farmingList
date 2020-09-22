import React from 'react'
import {Link} from 'react-router-dom'

const ItemCard = ({ item }) => {
  return (
    <div className="card border-info mb-3">
      <div className="card-header"><h3><span>{item.attributes.name}</span></h3>
      <Link className="btn btn-outline-warning" to={`/items/${item.id}/edit`}>Edit or Delete this Character</Link>
      </div>
    </div>
  )
}

export default ItemCard
import React from 'react'

const FarmingListForm = ({ formData }) => {

  const { name } = formData

  return (
    <div className="card text-white bg-secondary">
      <form className="form-group">
      <input className="form-control col-sm-8" placeholder='Add Item' name='name' value={name} isrequired='true' />
      <input className="btn btn-outline-warning" type='submit' value={'Create Item'} />
      </form>
    </div>
  )
}

export default FarmingListForm
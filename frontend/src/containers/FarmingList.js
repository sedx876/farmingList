import React from 'react'
import ItemCard from '../components/ItemCard'
import FarmingListForm from '../components/FarmingListForm'
import MyFarmingList from '../components/MyFarmingList'
import NewItemFormWrapper from '../components/NewItemFormWrapper'
import EditItemFormWrapper from '../components/EditItemFormWrapper'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'

class FarmingList extends React.Component {
  render() {
    const {items} = this.props
    return (
      <div>
        <Switch>
          <Route exact path='/farminglist' component={MyFarmingList}/>
          <Route exact path='/farminglist/new' component={NewItemFormWrapper} />
          <Route exact path='/items/:id' render={props => {
            const item = items.find(item => item.id === props.match.params.id)
            console.log(item)
            return <ItemCard item={item} {...props} />
          }}/>
          <Route exact path='/items/:id/edit' render={props => {
              const item = items.find(item => item.id === props.match.params.id)
              return <EditItemFormWrapper item={item} {...props}/>
            }
          }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
  items: state.myFarmingList
  })
}

export default withRouter(connect(mapStateToProps)(FarmingList));
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import farmingListForm from './reducers/farmingListForm'
import myFarmingList from './reducers/myFarmingList'

const reducer = combineReducers({
  farmingListForm,
  myFarmingList
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
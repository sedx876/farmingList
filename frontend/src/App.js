import React from 'react';
import './App.css';
import ItemsPage from './components/ItemsPage'
import {connect} from 'react-redux'
import {editItem, createItem, deleteItem} from './actions'
import 'bootswatch/dist/sketchy/bootstrap.min.css'


function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(editItem(id, { status }));
  };

  const onCreateItem = ({ name }) => {
    props.dispatch(createItem({ name }));
  };

  const onDeleteItem = (id) => {
    props.dispatch(deleteItem(id));
  };

  return (
    <div className="App">
      
      <ItemsPage items={props.items} 
      onStatusChange={onStatusChange} 
      onCreateItem={onCreateItem} 
      onDeleteItem={onDeleteItem} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps) (App);

import React from 'react';
import './styles/App.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import FarmingList from './containers/FarmingList'


class App extends React.Component {
  render() {
    return (
      <div>
        <FarmingList />
      </div>
    )
  }
}

export default App;

import React from 'react';
import './styles/App.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import FarmingList from './containers/FarmingList'
import Navbar from './components/Navbar'


class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
        <FarmingList />
      </div>
    )
  }
}

export default App;

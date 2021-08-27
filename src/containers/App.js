import React from 'react'
import Scroll from '../components/scroll/scroll'
import CardList from '../components/cardList/cardList'
import SearchBox from '../components/searchBox/searchBox'
import ErrorBoundary from '../components/errorBoundary/errorBoundary'

import './App.css';

class App extends React.Component{
  
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users => {
      this.setState({robots: users})
    } )
}

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
  }
  
  render(){
    //const filteredRobots = this.state.robots.filter(robots => {
      //return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    //})
    const {robots, searchfield} = this.state
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
      return !robots.length ? 
      <h1 className="tc">loading</h1> :
      (
        <div className="tc">
          <h1 className="f1 tc ">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
            
          </Scroll>
        </div>
    
      )
    
  }
}

export default App;

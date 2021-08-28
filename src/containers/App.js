import React, { useState, useEffect} from 'react'
import Scroll from '../components/scroll/scroll'
import CardList from '../components/cardList/cardList'
import SearchBox from '../components/searchBox/searchBox'
import ErrorBoundary from '../components/errorBoundary/errorBoundary'

import './App.css';

function App (){

  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')
  const [count, setCount] = useState(0)
  

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots(users)})
      console.log(count)


  },[count])

  const onSearchChange = (event) =>{
    setSearchField(event.target.value)
  }
  
    
  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  
    
  return !robots.length ? 
  <h1 className="tc">loading</h1> :
  (
    <div className="tc">
      <h1 className="f1 tc ">RoboFriends</h1>
      <button onClick={ () =>setCount(count +1)}>Click Me!!!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
        
      </Scroll>
    </div>

  )
      
  
}

export default App;

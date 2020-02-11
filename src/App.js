import React, { Component } from 'react';
import { CardList } from './component/card-list/card-list.component'
import {SearchBox} from './component/searchbox/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }

  }
  componentDidMount() { //when DOM loads below function will execute
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handlechange = (e)=>{
    this.setState({searchfield:e.target.value});
  }
  render() {
    const { monsters, searchfield } = this.state; //equivalent to const searchfield = this.state.searchfield
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLocaleLowerCase()));
    console.log(filteredMonsters);


    return (<div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search Monsters!"
        handleChange={this.handlechange} />
      <CardList monsters={filteredMonsters}>
      </CardList>
    </div>);

  }
}

export default App;

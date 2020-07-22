import React ,{Component} from 'react';
import {CardList} from './component/card-list/card-list.component';
//import {Card} from './component/card/card.component';
import {SearchBox} from './component/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchfield:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handlechange = (e) => {
    this.setState({searchfield:e.target.value})
  }
  render(){
    const {monsters,searchfield} = this.state;
    const filteresMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={'search monsters'}
          handlechange={this.handlechange}
        />
        <CardList monsters={filteresMonsters}/>
          
        
          
      </div>
    )
  }
}

export default App;

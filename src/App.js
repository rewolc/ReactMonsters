import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {Input} from './components/input/input.jsx'
class App extends React.Component {
  constructor (){
    super();
    this.state = {
      monsters :[],
      searchField: ''
    };
  }
  componentDidMount ()
  {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (users => this.setState({monsters : users}));
  }
  render(){
    const { monsters, searchField} =  this.state;
    const filteredMonsters = monsters.filter(i => i.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Input 
      placeholder='start typing'
      handleChange={e => this.setState({searchField : e.target.value})} />
      <CardList monster = {filteredMonsters}> 
      </CardList>
      
    </div>
  );

}}

export default App;


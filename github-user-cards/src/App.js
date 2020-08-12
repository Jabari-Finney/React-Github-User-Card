import React,{Component} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import UserCard from './Components/userCards'
import FollowerCards from './Components/followerCards';


class App extends Component {
    constructor() {
      super();
      this.state = {
        user:[],
        followers:[]
      };
    }

    componentDidMount(){
      return(
      axios
      .get('https://api.github.com/users/jabari-finney')
      .then(res =>{
        console.log(res);
        this.setState({user:res.data})
      })
      .catch(err =>{
        console.log(err);
      }),
      axios
      .get('https://api.github.com/users/jabari-finney/followers')
      .then(res =>{
        console.log(res);
        this.setState({followers:res.data})
      })
      .catch(err =>{
        console.log(err);
      })
      )
    }
  
    render() {
    return (
      <div className="App">
        <h1> Github User Card </h1>
        <UserCard user={this.state.user}/>
        <FollowerCards followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
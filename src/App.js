import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Users from './Components/Users/Users.js';

function App() {
  // const [users, setUsers] = useState({})
  // useEffect(()=>{
  //   fetch('https://reqres.in/api/users?page=2')
  //   .then(res => res.json())
  //   .then(data => setUsers(users.data))
  // },[])
  return (
    <div className="App">
      
      {/* <h2>Length: {users.data.length}</h2> */}
      {/* {
        users.data.map(user =><p>{user.name}</p>)
      } */}
      <Users/>
    </div>
  );
}

export default App;

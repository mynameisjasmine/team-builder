import React, { useState }  from 'react';
import Form from './Form';
import './App.css';
import './index.css';

function App() {
  const usersInfo = [
    {id: 1, name: 'Sally Davidson', email: 'sally@outlook.com', role: 'Dev Ops'},
    {id: 2, name: 'Robert Williams', email: 'robby123@gmail.com', role: 'Back End'},
    {id: 3, name: 'Andie Smith', email: 'smith.andie@aol.com', role: 'Senior Dev'}
  ]
  const [people, setPeople] = useState(usersInfo)
  

  const addUser = user => {
		const newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
      role: user.role

    };
    setPeople([...people,newUser]);
	};
  
  return (
    <div className="App">
    <p>Team Form</p>
    <Form addUser={addUser}/>
    <div className="card-container">
    {people.map((user, index) => (
      <div className="card-div" key={user.id}>
        <h4>Name:{user.name}</h4> 
   <h4> Email:{user.email}</h4>
    <h4>Role:{user.role}</h4>
      </div>
    ))}
    </div>
    
    
    </div>
  );
}

export default App;

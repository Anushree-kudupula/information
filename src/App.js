import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import Forms from './Components/Forms'


function App() {
  
  const [firstName,setfirstName]=useState('');
  const [lastName,setlastName]=useState('');
  const [employerid,setemployerid]=useState('');
  const [gender,setgender]=useState('');
  const inputHandler=(data)=>{
    setfirstName(data.firstName);
    setlastName(data.lastName);
    setemployerid(data.employerid);
    setgender(data.gender);
    
console.log(data);
  }
  const state=[{firstName: firstName,
    lastName: lastName,
    employerid: employerid,
    gender: gender}];
  
  return (

    <div className="App">
      <Form onDis={inputHandler}/>
      <Forms item={state[0]}/>

    </div>

  );
}

export default App;

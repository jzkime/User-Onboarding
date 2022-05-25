import './App.css';
import React, { useState } from 'react'
import Form from './Form'

const initialForm = {
  email: '',
  first_name: '',
  last_name: '',
  terms: false
}

function App() {
  const [ formValue, setFormValue ] = useState(initialForm);
  const [ users, setUsers ] = useState([]);


  const changeValue = (name, value) => {
    setFormValue({...formValue, [name]: value});
  }

  const submitForm = () => {
    const newUser = {
      email: '',
      first_name: '',
      last_name: '',
    }
  }

  return (
    <div className="App">
      <Form values={formValue} change={changeValue} submit={submitForm}/>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form'
import Users from './Users'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import axios from 'axios'

const initialForm = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  terms: false
}

const initialErrors = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
}

function App() {
  const [ formValue, setFormValue ] = useState(initialForm);
  const [ users, setUsers ] = useState([]);
  const [ errors, setErrors ] = useState(initialErrors);
  const [ disabledButton, setDisabledButton] = useState(true)

  const validate = (name, value) => {
    yup.reach(formSchema, name).validate(value)
    .then(() => setErrors({...errors, [name]: "" }))
    .catch((err) => setErrors({...errors, [name]: err.errors[0]}))
  }

  const changeValue = (name, value) => {
    validate(name, value)
    setFormValue({...formValue, [name]: value});
  }

  const submitForm = () => {
    const newUser = {
      email: formValue.email.trim(),
      first_name: formValue.first_name.trim(),
      last_name: formValue.last_name.trim(),
      password: formValue.password.trim()
    }

    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([...users, res.data])
    })

    setFormValue(initialForm)
  }

  useEffect(() => {
    formSchema.isValid(formValue).then(valid => setDisabledButton(!valid))
  }, [formValue])

  return (
    <div className="App">
      <Form values={formValue} change={changeValue} submit={submitForm} errors={errors} disabled={disabledButton}/>

    <div className='user-list'>
      { 
      users.map(user => <Users user={user} key={user.id} />)
      } 
    </div>
    </div>
  );
}

export default App;

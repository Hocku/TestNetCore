import React,{useState} from "react"
import { Form, Button } from "react-bootstrap";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [login,setLogin]=useState('')
  const [password,setPassword]=useState('')
  const onSubmitForm = () => {
    console.log(login+","+password)
  }
  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={login} onChange={({target})=>setLogin(target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={({target})=>setPassword(target.value)}/>
        </Form.Group>
          <Button variant="primary" onClick={onSubmitForm}>
            Submit
          </Button>
      </Form>
    </div>
  );
}

export default App;

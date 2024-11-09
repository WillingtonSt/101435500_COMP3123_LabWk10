
import './App.css';
import './form.css';
import Display  from './Display';
import Form from './Form';
import React, {useState} from 'react'

function App() {

const [data, setData] = useState({ name: '', email: ''});

const handleFormSubmit = (formData) => {
  setData(formData);
};


  return (
    <div className="App">
      <div className="Form-Container">
      <h1>Data Entry Form</h1>
      <Form onSubmit={handleFormSubmit} />
      </div>
      <Display data={data} />
    </div>
  );
}

export default App;

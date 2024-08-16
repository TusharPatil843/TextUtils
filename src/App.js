
import './App.css';
import React , {useState} from 'react';

import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode , setMode] = useState('light');

  const[alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    }
    )

    setTimeout(() => {
      setAlert(null);
    }, 1100);
  }

  const toggle = ()=> {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert('Dark mode has been enabled' , 'success')
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white'
        showAlert('Light mode has been enabled' , 'success')
      }
  }
 
  return (
    <>
    <Router>
      <Navbar title='TextUtils' about = "About" mode = {mode} toggleMode = {toggle}/>

      <Alert alert = {alert}/>
      <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />

        <Route path='/about' element={<About />} />
           
      </Routes>

      </Router>
    </>
  );
}

export default App;

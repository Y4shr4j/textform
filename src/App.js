import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert  from './component/Alert';
import About from './component/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 500);
}

  const toggleMode = (cls)=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#191970';
      showAlert("Dark mode has been enable", "success");
      document.title = 'TextUtils - Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#A3E4D7';
      showAlert("Light mode has been enable", "success")
      document.title = 'TextUtils - Light mode';
    }
  }
  return (
    <>
      <Router>
    <Navbar title="Yash - TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;

import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // React router is used for routing components without reloading 
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const [greenMode, setGreenMode] = useState(false);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1000);
    };

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#2f353b';
            document.body.style.color = 'white';
            showAlert("Dark mode has been set.", "success");
        } else if(mode === 'dark') {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            showAlert("Light mode has been set", "success");
        }
    };

    const toggleGreenMode = () => {
        if(greenMode===false) {
            setGreenMode(true);
            document.body.style.backgroundColor = '#375437';
            document.body.style.color = 'white';
            showAlert("Greenish dark Mode has been set", "success");
        } else {
            setGreenMode(false);
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            showAlert("Light mode has been set", "success");
        }
    };
    
    return (
        <Router>
          <Navbar aboutText="About Text Utils" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} greenMode={greenMode} />
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/about">
              <About mode={mode} greenMode={greenMode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Try Text Utils! Enter text below" showAlert={showAlert} greenMode={greenMode} />
            </Route>
          </Switch>
        </Router>
    );
}

export default App;

/*
  Look at how routing is done here
  Using 'exact path' will do complete matching
  whereas 'path' will do partial matching 
*/

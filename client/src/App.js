import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import store from './redux/store'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Alert from './components/Alert';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';
// import { Provider } from 'react-redux';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    < >
    <Router >
    <Navbar />
    <Alert alert={alert} />
    <div className='container'>
    <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
            
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

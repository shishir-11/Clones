import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      {/* <Register/> */}
      {/* <Home/> */}
      {/* <Watch/> */}
      
        <Routes>
          <Route path={"/"} exact element={<Home/>}/>
          <Route path={"/watch"} exact element={<Watch/>}/>
          <Route path={"/signup"} exact element={<Register/>}/>
          <Route path={"/login"} exact element={<Login/>}/>

        </Routes>
    </Router>
    </div>
  );
}

export default App;

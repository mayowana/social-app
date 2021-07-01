import Login from './components/auth/login/Login'
import Signup from './components/auth/signup/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' exact component={Login}></Route>
      <Route path='/signup' exact component={Signup}></Route>
    </div>
    </Router>
  );
}

export default App;

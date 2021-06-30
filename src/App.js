import Login from './components/auth/login/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Login />
    </div>
    </Router>
  );
}

export default App;

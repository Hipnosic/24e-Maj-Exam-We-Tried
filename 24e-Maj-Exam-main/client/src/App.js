import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Guest from "./components/guest";
import Admin from './components/admin';
import Login from './components/login';
import Signup from './components/register'

function App() {
  return (
      <BrowserRouter>
            <ul className="list">
              <li>
                <Link to="/">Guest</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/auth/login">Login</Link>
              </li>
              <li>
                <Link to="/auth/register">Register</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Guest />}></Route>
                 <Route exact path='/admin' element={< Admin />}></Route>
                 <Route exact path='/auth/login' element={< Login />}></Route>
                 <Route exact path='/auth/register' element={< Signup />}></Route>

          </Routes>
    </BrowserRouter>
  );
}

export default App;

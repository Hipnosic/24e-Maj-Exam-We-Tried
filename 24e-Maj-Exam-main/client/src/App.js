import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Guest from "./components/guest";
import Admin from './components/admin';
import User from './components/user';

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
                <Link to="/user">User</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Guest />}></Route>
                 <Route exact path='/admin' element={< Admin />}></Route>
                 <Route ezact path='/user' element={< User />}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;

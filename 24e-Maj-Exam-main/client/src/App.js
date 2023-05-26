import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Guest from "./components/guest";
import Admin from './components/admin';

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
            </ul>
           <Routes>
                 <Route exact path='/' element={< Guest />}></Route>
                 <Route exact path='/admin' element={< Admin />}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;

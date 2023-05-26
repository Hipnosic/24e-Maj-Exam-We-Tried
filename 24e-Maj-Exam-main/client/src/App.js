import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from './pages/Blogs';

function App() {
  return (
      <BrowserRouter>
            <ul className="list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/blogs' element={< Blogs />}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;

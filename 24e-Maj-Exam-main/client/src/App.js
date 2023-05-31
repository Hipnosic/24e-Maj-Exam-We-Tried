import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Guest from "./views/guest";
import Admin from './views/admin';
import Login from './views/login';
import Signup from './views/register'
import User from './views/user';
import Home from './views/Home';
import LayoutContainer from './components/LayoutContainer';

function App() {

  return (
    <LayoutContainer>
      <BrowserRouter>
           <Routes>
                 {/*<Route exact path='/' element={< Guest />}></Route>*/}
                 <Route exact path='/' element={<Home />}></Route>
                 <Route exact path='/admin' element={< Admin />}></Route>
                 <Route exact path='/auth/login' element={< Login />}></Route>
                 <Route exact path='/auth/register' element={< Signup />}></Route>
                 <Route ezact path='/user' element={< User />}></Route>
          </Routes>
      </BrowserRouter>
    </LayoutContainer>
  );
}

export default App;

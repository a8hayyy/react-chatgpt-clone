import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Welcome from './pages/welcome';
import './Style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" Component={Welcome} exact/>
      <Route path="/" Component={Home} exact/>
      <Route path='/login' Component={Login} exact/>
      <Route path='/signup' Component={Signup} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

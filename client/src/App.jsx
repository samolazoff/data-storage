import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './app.sass';

import Navbar from './components/navbar/Navbar';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Home from './components/home/Home';
import AppFooter from './components/footer/AppFooter';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='registration' element={<Registration></Registration>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
      </Routes>
      </main>
      <AppFooter></AppFooter>
    </BrowserRouter>
  );
}

export default App;

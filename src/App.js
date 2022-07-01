import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Components/Billing/Billing';
import Header from './Components/Common/Header';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Billing />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </main>
  );
}

export default App;

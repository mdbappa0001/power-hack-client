import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Components/Billing/Billing';
import Header from './Components/Common/Header';
import RequireAuth from './Components/Common/RequireAuth';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('https://demo-deploy-app-50.herokuapp.com/billingCount')
      .then(res => res.json())
      .then(result => {
        setCount(result.count)
      })
  }, [])
  return (
    <main>
      <Header count={count} />
      <Routes>
        <Route path='/' element={<RequireAuth> <Billing count={count} setCount={setCount} /></RequireAuth>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </main>
  );
}

export default App;

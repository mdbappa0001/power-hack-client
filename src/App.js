import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Billing from './Components/Billing/Billing';
import Header from './Components/Common/Header';
import RequireAuth from './Components/Common/RequireAuth';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register';
import { ToastContainer } from 'react-toastify';
function App() {
  const [count, setCount] = useState(0)
  const [refetch, setRefetch] = useState(0)
  const user = localStorage.getItem('accessToken')
  useEffect(() => {
    fetch('https://demo-deploy-app-50.herokuapp.com/billingCount')
      .then(res => res.json())
      .then(result => {
        setCount(result.count)
      })
  }, [refetch, user])
  return (
    <main>
      <ToastContainer />
      <Header count={count} user={user} />
      <Routes>
        <Route path='/' element={<RequireAuth>
          <Billing
            count={count}
            setCount={setCount}
            refetch={refetch}
            setRefetch={setRefetch} /></RequireAuth>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </main>
  );
}

export default App;

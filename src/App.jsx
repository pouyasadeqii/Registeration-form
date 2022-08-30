import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route, Routes, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/*' element={<Navigate to='/signup' />} /> 
      </Routes>
    </div>
  );
};

export default App;
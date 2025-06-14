// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Review from './components/Review';
import Login from './components/Login';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from './Authcontext';

export default function App() {
  const { user, logout } = useAuth();

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-danger">
      <nav className="mb-4 text-center">
        {user ? (
          <>
            <button onClick={() =>{
              const confirmlogout = window.confirm("Sure kana jan beh? Logout kana?");
              if(confirmlogout){
                logout();
              }
            }} className="btn btn-danger position-fixed" style={{top: '20 px', right:'20 px', zIndex:1050}}>Logout</button>
          </>
        ) : (
          <>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<ProtectedRoute><Review /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

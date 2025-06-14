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
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{backgroundImage:'url(https://marketplace.canva.com/EAFhwfMq3ds/1/0/1600w/canva-colorful-cute-cats-illustration-desktop-wallpaper-KBBZLdpjLcM.jpg)', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', width:'100%'}}>
      <nav className="mb-4 text-center">
        {user ? (
          <>
              <button
              className="btn btn-primary position-fixed"
              style={{ top: '10px', left: '70px', zIndex: 1050 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
              ↑ Top
              </button>

              <button
              className="btn btn-success position-fixed"
              style={{ top: '10px', right: '10px', zIndex: 1050 }}
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
              ↓ Bottom/Skip
              </button>
            <button onClick={() =>{
              const confirmlogout = window.confirm("Sure kana jan beh? Logout kana?");
              if(confirmlogout){
                logout();
              }
            }} className="btn btn-danger position-fixed"style={{top: '4%',left: '50%',transform: 'translate(-50%, -50%)',zIndex: 1050,}}>Logout</button>

          </>
        ) : (
          <>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/review" element={<ProtectedRoute><Review /></ProtectedRoute>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

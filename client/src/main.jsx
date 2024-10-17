import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/loginpage/login.jsx';
import Landing from './pages/landingpage/landing.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/protectedRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route 
            path='/home' 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

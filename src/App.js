import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CloudServicesPage from './components/CloudServicesPage';
import CloudStorage from './components/CloudStorage';
import CloudComputing from './components/CloudComputing';
import CloudNetworking from './components/CloudNetworking';
import CloudSecurity from './components/CloudSecurity';
import AdminDashboard from './components/AdminDashboard'; // Make sure the path is correct

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/services" element={<ProtectedRoute><CloudServicesPage /></ProtectedRoute>} />
          <Route path="/CloudStorage" element={<CloudStorage />} />
          <Route path="/CloudComputing" element={<CloudComputing />} />
          <Route path="/CloudNetworking" element={<CloudNetworking />} />
          <Route path="/CloudSecurity" element={<CloudSecurity />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} /> {/* Admin Dashboard Route */}
        </Routes>
        <nav>
          <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>  {/* Link to Admin Dashboard */}
        </nav>
      </Router>
    </AuthProvider>
  );
}

export default App;

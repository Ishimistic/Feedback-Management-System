
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className='home-heading'>Kindly Login</div>
      <div className="home-login-options">
        <Link to="/login?role=user" className='opt'>Login as User</Link>
        <Link to="/login?role=admin" className='opt'>Login as Admin</Link>
      </div>
    </div>
  );
};

export default Home;
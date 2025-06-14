// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authcontext';
import { users } from '../user';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Find matching user
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      login(foundUser); // save full user object
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
    <h1 className='text-info position-absolute top-0 start-50 translate-middle-x'> WELCOME FUTURE TEACHERS! </h1>
    <p className='position-absolute top-0 start-0 text-dark fs-3'>About this Website <br/> To Practice my Programming Skills <br/> * The Questions Are Randomly Created by <a href="https://claude.ai/" className="link-success" target='_blank' rel='noopener noreferrer'>Claude Ai</a> 
    <br/> * Created Specially for Ma'am Luisa Mae <br/> * To Help Future Teachers to Review For Free <br/> * Randomized Questions </p>
    <p className='position-absolute top-50 end-0 translate-middle-y fs-1 text-info'>General Education <p className='fs-5 text-warning'>* Purposive Communication in English <br/>* Malayuning Komunikasyon sa Wikang Filipino <br/>
    * Science and Technology <br/>* Mathematics <br/>* Reading in Philippine History and Society <br/>* The life and Works of Rizal <br/>* Ethics <br/>* The Contemporary World <br/>* Art Appreciation <br/>* Understanding the Self
    </p> <br/> Professional Education <p className='fs-5 text-warning'>*The Teaching Profession <br/>* Facilitating Learner-centered Learning <br/>* Foundations of special and Inclusive Education <br/>*
    Building & Enhancing New Literacies Across The Curriculum <br/>* Technology For Teaching & Learning <br/>* The Teacher & The Community, School Culture,<br/>& Organizational Leadership <br/>* 
    Child & Adolescent Learners & Learning Principles <br/>*  The Teacher & The School Curriculum <br/>* Methods & Strategies of Teaching <br/>* Assessment of Learning <br/>* Action Research <br/>* 
    Field Study & Teaching Internship</p></p>
    <div className="card p-4 shadow center position-absolute top-50 start-50 translate-middle" style={{ width: '100%', maxWidth: 400 }}>
      <h3 className="mb-3 text-center">You need to Login to get Access!</h3>
      <p className='text-center'>No account? Click  and Message this <a href='https://www.facebook.com/daniel.deguzman.547389' target='_blank' rel='noopener noreferrer'>ACCOUNT</a> Get yours for Free</p>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="user"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;

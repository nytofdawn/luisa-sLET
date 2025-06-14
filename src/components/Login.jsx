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
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      login(foundUser);
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center text-info mb-4">WELCOME FUTURE TEACHERS!</h1>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="bg-light p-3 rounded shadow-sm">
            <h4 className="text-dark">About this Website</h4>
            <ul className="text-muted small">
              <li>To Practice My Programming Skills</li>
              <li>The Questions Are Randomly Created by <a href="https://claude.ai/" className="link-success" target="_blank" rel="noopener noreferrer">Claude Ai</a></li>
              <li>Created Specially for Ma'am Luisa Mae</li>
              <li>To Help Future Teachers Review for Free</li>
              <li>Randomized Placement of Questions</li>
              <li>With Correct Answers After Submitted</li>
              <li>This is not For Sale</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="bg-light p-3 rounded shadow-sm">
            <h4 className="text-info">General Education</h4>
            <ul className="text-warning small">
              <li>Purposive Communication in English</li>
              <li>Malayuning Komunikasyon sa Wikang Filipino</li>
              <li>Science and Technology</li>
              <li>Mathematics</li>
              <li>Reading in Philippine History and Society</li>
              <li>The Life and Works of Rizal</li>
              <li>Ethics, The Contemporary World</li>
              <li>Art Appreciation, Understanding the Self</li>
            </ul>
            <h4 className="text-info mt-3">Professional Education</h4>
            <ul className="text-warning small">
              <li>The Teaching Profession</li>
              <li>Facilitating Learner-centered Learning</li>
              <li>Foundations of Special and Inclusive Education</li>
              <li>Building & Enhancing New Literacies</li>
              <li>Technology for Teaching & Learning</li>
              <li>Teacher & School Community/Culture</li>
              <li>Child & Adolescent Learners</li>
              <li>Curriculum, Methods, Assessment</li>
              <li>Action Research, Field Study, Internship</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-6">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-3">Login to Access the Review</h3>
            <p className="text-center small">
              No account? Message this <a href='https://www.facebook.com/daniel.deguzman.547389' target='_blank' rel='noopener noreferrer'>Account</a> to get yours for free.
            </p>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label>Username</label>
                <input
                  type="text"
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
      </div>
    </div>
  );
};

export default Login;

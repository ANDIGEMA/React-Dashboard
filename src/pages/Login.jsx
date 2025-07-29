import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllEmployee');
      console.log("Login Response:", response.data);
      // Optionally handle login or store user data here
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee Management System</h2>

      <div className="row">
        {/* Left spacer */}
        <div className="col-lg-4"></div>

        {/* Login form center */}
        <div className="col-lg-4 border border-dark rounded shadow p-4">
          <h2 className="text-center py-2">Login</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                size="sm"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
              <Form.Check type="checkbox" label="Remember me" />
              <Form.Text className="fw-bold" style={{ cursor: 'pointer' }}>
                Forgot Password?
              </Form.Text>
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit" size="md" className="w-50">
                Login
              </Button>
            </div>
          </Form>
        </div>

        {/* Right spacer */}
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default Login;

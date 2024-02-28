import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
  width: 90%; /* Adjust according to your design */
  max-width: 400px; /* Maximum width */
  padding: 20px;
  background-color: #111;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box; /* Ensure padding is included in width */
  margin: 0 auto; /* Center the form horizontally */
`;

const Input = styled.input`
  width: calc(100% - 20px); /* Subtract padding to fit inside container */
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
`;

const Button = styled.button`
  width: calc(100% - 20px); /* Subtract padding to fit inside container */
  padding: 10px;
  border: none;
  background-color: #e50914;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    onSubmit();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Link to="/"><Button type="submit">Log In</Button></Link>
      </form>
    </FormContainer>
  );
};

export default LoginForm;

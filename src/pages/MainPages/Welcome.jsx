import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from '../Modal/LoginModal'; // Assume you have a LoginForm component
import RegisterForm from '../Modal/RegModal'; // Assume you have a RegisterForm component

const Container = styled.div`
  background: #000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const MainTitle = styled.h1`
  font-size: 2em;
  margin: 0.67em 0;
  color: #fff;
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  display: block;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  border: 1px solid transparent;
  border-radius: 5px;
  height: 250px;
  width: 400px;
  margin: 10px;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border: 3px solid red;
    transform: scale(0.95);
  }
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 18px;
  color: #fff;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  z-index: 1;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const SignInSignUp = () => {
  const [formType, setFormType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForm = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <MainTitle>Welcome to ReactFlix</MainTitle>
      <BoxContainer>
        <BoxWrapper onClick={() => openForm('login')}>
          <Box backgroundImage="public/Logo/Login.jpg" />
          <Title>Login</Title>
        </BoxWrapper>
        <BoxWrapper onClick={() => openForm('register')}>
          <Box backgroundImage="public/Logo/Register.jpg" />
          <Title>Register</Title>
        </BoxWrapper>
      </BoxContainer>
      {isModalOpen && (
        <ModalContainer>
          <CloseButton onClick={closeModal}>X</CloseButton>
          {formType === 'login' && <LoginForm />}
          {formType === 'register' && <RegisterForm />}
        </ModalContainer>
      )}
    </Container>
  );
};

export default SignInSignUp;

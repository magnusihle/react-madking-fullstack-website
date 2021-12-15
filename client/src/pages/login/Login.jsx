import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';



const Login = () => {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user)


  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };


  return (
    <Container>
      <LoginContainer>
        <Title>Logg inn!</Title>
        <Input type="text" name="username" placeholder="Brukernavn" onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" name="password" placeholder="Passord" onChange={(e) => setPassword(e.target.value)} />
        <Button backgroundcolor="#3E768C" color="white" hover="#558ba0" onClick={handleLogin} disabled={isFetching}>
          Log Inn
        </Button>{" "}
        {!error && <Error>Innlogging feilet..</Error>}
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10em 1em 5em 1em;

`;

const LoginContainer = styled.div`
transition: all .3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 2px 3px 15px 5px var(--color-5);
  border-radius: 1em;
  padding: 1em;
  min-height: 30em;
  min-width: 25em;

  @media (max-width: 800px) {
    min-height: 20em;
  min-width: 20em;
  }

`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Input = styled.input`
border: none;
padding: 2em;
box-shadow: 1px 2px 10px 1px var(--color-5);
width: 100%;
color: #b8b8b8;

@media (max-width: 800px) {
    padding: 1.5em;

  }
`;

const Button = styled.button`
  padding: 14px 18px;
  transition: all 0.2s ease;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 1.5em;
  margin: 0 5px;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hover};
    border-radius: 0.5em;
    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);
  }

  &:disabled{
    background-color: gray;
    cursor: not-allowed;

  }
`;


const Error = styled.p`
  font-size: 1.1rem;
  color: red;
`;
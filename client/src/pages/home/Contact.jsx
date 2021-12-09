import styled from "styled-components";
import { useState, useEffect } from "react";
import { validateRequestMessage } from "../../reusableFunctions/Validations";


const Contact = () => {
  //Validation message states
  const [messageState, setMessageState] = useState({
    email: "",
    phonenumber: "",
    title: "",
    message: "",
    confirm: "",
    error: false
  });

  //Request message state => the userrequest that will get validated and sent to our mailbox
  const [requestMessage, setRequestMessage] = useState({
    email: "",
    phonenumber: "",
    title: "",
    message: "",
  });


  //Get input values
  const handleChange = (event) => {
    event.persist();
    let value = event.target.value;
    setRequestMessage({ ...requestMessage, [event.target.name]: value });
  };

  //Send request to db/mailbox
  const handleSendRequest = (e) => {
    e.preventDefault();
    if (validateRequestMessage(requestMessage.email, requestMessage.phonenumber, requestMessage.title, requestMessage.message, messageState)) {
      console.log("Object to send: ", requestMessage);
      setMessageState({
        ...messageState,
        confirm: "Din melding er nå sendt. Vi vil svare så raskt vi kan!",
        error: false
      });
    } else {
      setMessageState({
        email: "",
        phonenumber: "",
        title: "",
        message: "",
        confirm: "Feil. Du må skrive inn gyldig data i alle feltene. ",
        error: true
      });
    }
  };


  return (
    <Container id="contact">
      <Title>Kontakt oss</Title>

      <ContactForm>
        {/* <Label>Email</Label> */}
        <Input
          type="text"
          placeholder="Epost"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <ErrorMessage>{messageState.email}</ErrorMessage>

        <Input
          type="text"
          placeholder="Mobilnummer"
          name="phonenumber"
          onChange={(e) => handleChange(e)}
        />
        <ErrorMessage>{messageState.phonenumber}</ErrorMessage>

        <Input
          type="text"
          placeholder="Tittel"
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <ErrorMessage>{messageState.title}</ErrorMessage>

        <TextArea
          type="text"
          placeholder="Melding"
          name="message"
          onChange={(e) => handleChange(e)}
        />
        <ErrorMessage>{messageState.message}</ErrorMessage>

        <Button
          onClick={(e) => {
            handleSendRequest(e);
          }}
        >
          Send
        </Button>
        {!messageState.error && <ConfirmationMessage>{messageState.confirm}</ConfirmationMessage>}
        {messageState.error && <ErrorMessage>{messageState.confirm}</ErrorMessage>}

      </ContactForm>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  background-color: var(--color-1);
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

const Title = styled.h1`
  flex: 1;
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 800;
`;

const ContactForm = styled.form`
  flex: 2;
  flex-direction: column;
  text-align: center;
  border-radius: 1em;
  padding: 1em 1em 0 1em;
  background-color: #fff;
  width: 80%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Label = styled.label`
  /* align-self: flex-start; */
  font-size: 20px;
  color: black;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  min-height: 4em;
  width: 100%;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #bfbfbf;
`;

const TextArea = styled.textarea`
  flex: 1;
  border: none;
  padding: 5px;
  width: 100%;
  max-width: 100%;
  font-size: 1.2rem;
  min-height: 10em;
`;

const Button = styled.button`
  padding: 14px 18px;
  transition: all 0.2s ease;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 1.5em;
  margin: 0 5px 1em 5px;
  background-color: var(--color-4);
  color: white;

  &:hover {
    background-color: #558ba0;
    border-radius: 0.5em;
    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
`;
const ConfirmationMessage = styled.p`
  font-size: 1.2rem;
  color: green;
`;

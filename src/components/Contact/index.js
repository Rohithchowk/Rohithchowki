import React from 'react'
import styled ,{keyframes} from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const boxReflect = keyframes`
  0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90%, 92% {
    text-shadow: 0 0 5px #03e9f4;
  }
  
  18.1%, 20%, 30%, 60%, 65%, 80%, 85%, 93%, 100% {
    text-shadow: 0px 0px 10px #03e9f4,
                0 0 20px #03e9f4,
                0 0 40px #03e9f4,
                0 0 80px #03e9f4,
                0 0 160px #03e9f4;
  }
`;

const boxRflect = keyframes`
  0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90%, 92% {
    box-shadow: 0 0 5px #03e9f4;
  }
  
  18.1%, 20%, 30%, 60%, 65%, 80%, 85%, 93%, 100% {
    box-shadow: 0px 0px 10px #03e9f4,
                0 0 20px #03e9f4,
                0 0 40px #03e9f4,
                0 0 80px #03e9f4,
                0 0 160px #03e9f4;
  }
`;


const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
animation ${boxReflect} 2.8s linear infinite;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
    &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
    &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(225deg, ${({ theme }) => theme.rb2} 0%, ${({ theme }) => theme.rb1} 100%);
    background: -moz-linear-gradient(225deg, ${({ theme }) => theme.rb2} 0%, ${({ theme }) => theme.rb1} 100%);
    background: -webkit-linear-gradient(225deg,  ${({ theme }) => theme.rb2} 0%, ${({ theme }) => theme.rb1} 100%);padding: 13px 16px;
  margin-top: 2px;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  animation : ${boxRflect} 2.8s linear infinite;
  &:hover {
    background: linear-gradient(225deg, hsla(271, 80%, 40%, 1) 0%, hsla(294, 80%, 40%, 1) 100%);
    // Add any additional styling for the hover effect
  }
`



const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const [t,i18]=useTranslation('global')
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ctrb8ik', 'template_6m8e2kp', form.current, 'gGMhvPg0WAbSs8SU0')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  const youremail =  t('Contact.youremail', { returnObjects: true });
  const yourname =  t('Contact.yourname', { returnObjects: true });
  const subject =  t('Contact.subject', { returnObjects: true });
  const message =  t('Contact.message', { returnObjects: true });
  const send =  t('Contact.send', { returnObjects: true });


  return (
    <Container>
      <Wrapper>
        <Title>{t('Contact.contact')}</Title>
        <Desc>{t('Contact.desc')}</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>{t('Contact.email')}</ContactTitle>
          <ContactInput placeholder={youremail} name="from_email" />
          <ContactInput placeholder={yourname} name="from_name" />
          <ContactInput placeholder={subject} name="subject" />
          <ContactInputMessage placeholder={message} rows="4" name="message" />
          <ContactButton type="submit" value={send} cursor="pointer" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact
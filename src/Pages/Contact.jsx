import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = styled.div`
  background-color: #070608;
  padding: 7rem 2rem;
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #a855f7;
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 12px;
  border: none;
  background-color: #1c1c1c;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: background-color 0.3s ease;

  &::placeholder {
    color: #7c7c7c;
  }

  &:focus {
    background-color: #292929;
  }
`;

const TextArea = styled.textarea`
  grid-column: 1 / -1;
  width: 100%;
  padding: 0.75rem;
  border-radius: 12px;
  border: none;
  background-color: #1c1c1c;
  color: #fff;
  font-size: 1rem;
  height: 150px;
  resize: none;
  outline: none;
  transition: background-color 0.3s ease;

  &::placeholder {
    color: #7c7c7c;
  }

  &:focus {
    background-color: #292929;
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  padding: 1rem 2rem;
  background-color: #a855f7;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1.5rem;

  &:hover {
    background-color: #9333ea;
  }
`;

const DiscordLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  background-color: #a855f7;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 12px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9333ea;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_iils8ij';
    const templateID = 'template_kxbr6ln';
    const userID = 'NX6zwOQ0a4aHRuWNV';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.error('FAILED...', err);
      });

    // Clear the form
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <Title>Contact</Title>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="company"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>
      <DiscordLink href="https://discord.com/users/1091118468155314306" target="_blank">
        <FontAwesomeIcon icon={faDiscord} style={{ marginRight: '0.5rem' }} />
        Contact me on Discord
      </DiscordLink>
    </ContactContainer>
  );
};

export default Contact;
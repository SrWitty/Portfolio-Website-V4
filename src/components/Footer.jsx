import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #070608; // New dark background
  color: #ffffff; // White text
  font-size: 0.9rem;
  border-radius: 10px; // Add border-radius

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

const LeftText = styled.div`
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #ffffff; // White color
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #7c3aed; // Purple color on hover
  }

  // Remove any default underline or border styles
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftText>Sir<span>.</span>Witty © 2024 — All rights reserved.</LeftText>
      <SocialIcons>
        <SocialLink href="https://github.com/SrWitty" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink href="https://discord.com/users/1091118468155314306" target="_blank">
          <FontAwesomeIcon icon={faDiscord} />
        </SocialLink>
        <SocialLink href="https://x.com/SirWitty_1" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;

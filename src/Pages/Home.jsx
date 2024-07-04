import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ReactMarkdown from 'react-markdown';
import OpenSourceProjects from '../components/OpenSourceProjects'; // Import the new component

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background-color: #070608; /* Dark background */
  color: #d1c4e9; /* Light purple text color */
  background-size: cover;
  background-position: center;
  padding-top: 6rem; /* Add padding on top */

  @media (max-width: 768px) {
    padding: 6rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 6rem 2rem;
  }

  @media (min-width: 1920px) {
    padding: 6rem 10rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: -1rem;
  color: #b39ddb; /* Purple text color */
  font-weight: bold;

  span {
    color: #7c3aed; /* Purple color for dot */
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 1920px) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: -3rem;
  color: #b39ddb;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 1920px) {
    font-size: 2rem;
  }
`;

const InfoContainer = styled.div`
  margin-top: 5rem;
  font-size: 1rem;
  text-align: left;
  color: #d1c4e9;
  opacity: 0;

  @media (max-width: 768px) {
    margin-top: 3rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
    font-size: 0.8rem;
  }

  @media (min-width: 1920px) {
    margin-top: 6rem;
    font-size: 1.2rem;
  }
`;

const InfoTitle = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }
`;

const markdownContent = `

## - **Styled-components 6.1.11:** Allows for CSS-in-JS styling, promoting reusable and maintainable styles.
## - **Swiper 11.1.4:** Adds touch-enabled sliders, improving mobile user experience.
## - **Tailwind-merge 2.3.0:** Combines Tailwind CSS classes for optimized styling.
## - **Locomotive Scroll 4.1.4:** Provides a smooth scrolling experience, improving navigation.
## - **Classnames 2.5.1 & clsx 2.1.1:** Simplifies class name manipulation for conditional styling.
## - **Framer Motion 11.2.11 & GSAP 3.12.5:** Powers advanced animations, bringing the site to life.
## - **@tailwindcss/typography 0.5.13:** Ensures responsive and elegant typography across the site.
## - **@portabletext/react 3.1.0:** Provides flexibility in rendering rich text content.
## - **React 18:** A JavaScript library for building user interfaces.
## - **React Router 6:** Declarative routing for React applications.
## - **Webpack 5:** A static module bundler for modern JavaScript applications.
## - **Babel 7:** A JavaScript compiler that helps to write next-generation JavaScript.
## - **ESLint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
## - **Prettier:** An opinionated code formatter that supports many languages.

`;

const Home = () => {
  useEffect(() => {
    gsap.to('.info', { opacity: 1, duration: 1, delay: 2 });

    // Smooth scroll to the bottom of the page after 2 seconds
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 2000);
  }, []);

  return (
    <HomeContainer>
      <Title>Hello, I'm Sir<span>.</span>Witty</Title>
      <Subtitle>Full-stack Web Developer</Subtitle>
      <InfoContainer className="info">
        <InfoTitle><strong>Technologies used in this website:</strong></InfoTitle>
        <ReactMarkdown>
          {markdownContent}
        </ReactMarkdown>
      </InfoContainer>
      <OpenSourceProjects /> 
    </HomeContainer>
  );
};

export default Home;

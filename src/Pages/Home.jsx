import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
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
  background-image: url('/path/to/your/background-image.png'); /* Add background image */
  background-size: cover;
  background-position: center;
  padding-top: 6rem; /* Add padding on top */
  heght
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: -1rem;
  color: #b39ddb; /* Purple text color */
  font-weight: bold;

  span {
    color: #7c3aed; /* Purple color for dot */
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: -3rem;
  color: #b39ddb; 
`;

const InfoContainer = styled.div`
  margin-top: 5rem;
  font-size: 1rem;
  text-align: left;
  color: #d1c4e9;
  opacity: 0; 
`;

const InfoTitle = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #ffffff; 
  margin-bottom: 1rem;
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
        <p><strong>Styled-components 6.1.11:</strong> Allows for CSS-in-JS styling, promoting reusable and maintainable styles.</p>
        <p><strong>Swiper 11.1.4:</strong> Adds touch-enabled sliders, improving mobile user experience.</p>
        <p><strong>Tailwind-merge 2.3.0:</strong> Combines Tailwind CSS classes for optimized styling.</p>
        <p><strong>Locomotive Scroll 4.1.4:</strong> Provides a smooth scrolling experience, improving navigation.</p>
        <p><strong>Classnames 2.5.1 & clsx 2.1.1:</strong> Simplifies class name manipulation for conditional styling.</p>
        <p><strong>Framer Motion 11.2.11 & GSAP 3.12.5:</strong> Powers advanced animations, bringing the site to life.</p>
        <p><strong>@tailwindcss/typography 0.5.13:</strong> Ensures responsive and elegant typography across the site.</p>
        <p><strong>@portabletext/react 3.1.0:</strong> Provides flexibility in rendering rich text content.</p>
        <p><strong>React 18:</strong> A JavaScript library for building user interfaces.</p>
        <p><strong>React Router 6:</strong> Declarative routing for React applications.</p>
        <p><strong>Webpack 5:</strong> A static module bundler for modern JavaScript applications.</p>
        <p><strong>Babel 7:</strong> A JavaScript compiler that helps to write next-generation JavaScript.</p>
        <p><strong>ESLint:</strong> A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.</p>
        <p><strong>Prettier:</strong> An opinionated code formatter that supports many languages.</p>
      </InfoContainer>
      <OpenSourceProjects /> 
    </HomeContainer>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavbarContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.scrolledDown ? '0.5rem 1rem' : '1rem 2rem')};
  background-color: #0e0e0e;
  color: #fff;
  border-radius: 50px;
  position: fixed;
  top: 1rem;
  right: calc(32% - 10px); /* Adjusted right position */
  transform: translateX(55%); 
  width: 50%; /* Adjusted width */
  max-width: 600px;
  z-index: 1000;
  transition: padding 0.3s, font-size 0.3s;
  box-shadow: ${(props) => (props.scrolledDown ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  border: 2px solid #fff;
  margin: 0 auto;   
`;

const Logo = styled.div`
  font-size: ${(props) => (props.scrolledDown ? '1.2rem' : '1.5rem')};
  font-weight: bold;
  color: #fff;

  span {
    color: #7c3aed;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavLink = styled.li`
  margin-left: 2rem;
  font-size: ${(props) => (props.scrolledDown ? '0.9rem' : '1rem')};
  font-weight: normal;
  color: #d1c4e9;
  transition: color 0.3s;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  &.active {
    color: #fff;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <NavbarContainer
      scrolledDown={scrolledDown}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo scrolledDown={scrolledDown}>
      Sir<span>.</span>Witty
      </Logo>
      <NavLinks>
        <NavLink scrolledDown={scrolledDown}>
          <StyledLink to="/">Home</StyledLink>
        </NavLink>
        <NavLink scrolledDown={scrolledDown}>
          <StyledLink to="/about">About</StyledLink>
        </NavLink>
        <NavLink scrolledDown={scrolledDown}>
          <StyledLink to="/works">Works</StyledLink>
        </NavLink>
        <NavLink scrolledDown={scrolledDown}>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
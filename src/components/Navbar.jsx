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
  max-width: calc(100% - 2rem);
  z-index: 1000;
  transition: padding 0.3s, font-size 0.3s;
  box-shadow: ${(props) => (props.scrolledDown ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  margin: 0 auto;

  @media (min-width: 768px) {
    right: calc(32% - 10px); /* Adjusted right position for larger screens */
    transform: translateX(55%);
    width: 50%; /* Adjusted width for larger screens */
    max-width: 600px;
  }

  @media (min-width: 1920px) {
    padding: ${(props) => (props.scrolledDown ? '0.5rem 2rem' : '2rem 4rem')};
    width: 70%;
    max-width: 1200px;
    top: 2rem;
  }
`;

const Logo = styled.div`
  font-size: ${(props) => (props.scrolledDown ? '1.2rem' : '1.5rem')};
  font-weight: bold;
  color: #fff;

  span {
    color: #7c3aed;
  }

  @media (max-width: 480px) {
    font-size: ${(props) => (props.scrolledDown ? '1rem' : '1.2rem')};
  }

  @media (min-width: 1920px) {
    font-size: ${(props) => (props.scrolledDown ? '1.5rem' : '2rem')};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    background-color: #0e0e0e;
    position: absolute;
    top: 3.5rem;
    right: 1rem;
    left: 1rem;
    border-radius: 10px;
    padding: 1rem;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }

  @media (min-width: 1920px) {
    gap: 2rem;
  }
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

  @media (max-width: 768px) {
    margin: 1rem 0;
  }

  @media (min-width: 1920px) {
    font-size: ${(props) => (props.scrolledDown ? '1rem' : '1.2rem')};
    margin-left: 3rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        ☰
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink scrolledDown={scrolledDown}>
          <StyledLink to="/" onClick={() => setIsOpen(false)}>Home</StyledLink>
        </NavLink>
        <NavLink scrolledDown={scrolledDown}>
          <StyledLink to="/about" onClick={() => setIsOpen(false)}>About</StyledLink>
        </NavLink>
        <NavLink scrolledDown={scrolledDown}>
          <StyledLink to="/works" onClick={() => setIsOpen(false)}>Works</StyledLink>
        </NavLink>
        <NavLink scrolledDown={scrolledDown}>
          <StyledLink to="/contact" onClick={() => setIsOpen(false)}>Contact</StyledLink>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import image1 from '../assets/images/spark.png';
import image2 from '../assets/images/portoflio1.png';
import image3 from '../assets/images/discordbotweb.png';
import image4 from '../assets/images/discord-bot.png';

const Container = styled.div`
  padding: 20px;
  background: #070608;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: left;
  margin-top: 100px;  
  margin-bottom: 50px;
  color: #A476FE;
  font-weight: bold;
`;

const Projects = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const Description = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s;

  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Project = styled(motion.a)`
  position: relative;
  width: 400px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: border 0.3s;
  text-decoration: none;

  &:hover {
    border: 3px solid #a369f7;
  }

  &:hover ${Description} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Arrow = styled.div`
  font-size: 2rem;
  color: #a369f7;
`;

const projects = [
  {
    title: 'Spark Creative',
    description: `The Spark Creative is a platform designed to showcase the works and services offered by a creative team. It provides information about the team members, their expertise, recent projects, and a blog section to share insights and updates.`,
    link: 'https://github.com/SrWitty/spark-creative',
    image: image1,
  },
  {
    title: 'PortfolioV2',
    description: `personal portfolio website! This project is an upgraded version of the original personal portfolio, now built using React.js. This second version includes several new features, updates to the design, additional pages, and refined color schemes.`,
    link: 'https://github.com/SrWitty/MyPortfolio',
    image: image2,
  },
  {
    title: 'Discord Bot Website',
    description: `Welcome to the official website repository for our Discord bot. This website serves as a hub of information, updates, and support for our Discord community.`,
    link: 'https://github.com/SrWitty/Discord-Bot-Website',
    image: image3,
  },
  {
    title: 'MasterShare',
    description: `Project Bot Share Discord is an advanced Discord bot designed to facilitate server sharing and enhance the member experience. It comes with a range of useful features and new runtime requirements.`,
    link: 'https://github.com/SrWitty/MasterShare',
    image: image4,
  },
];

const Work = () => {
  return (
    <Container>
      <Title>Works</Title>
      <Projects>
        {projects.map((project, index) => (
          <Project key={index} href={project.link} target="_blank">
            <Image src={project.image} alt={project.title} />
            <Description
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{project.title}</h3>
              <ReactMarkdown>{project.description}</ReactMarkdown>
              <Arrow>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
                  <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Arrow>
            </Description>
          </Project>
        ))}
      </Projects>
    </Container>
  );
};

export default Work;

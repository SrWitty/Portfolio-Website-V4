import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const ProjectsContainer = styled.div`
  background-color: #070608;
  padding: 2rem 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ProjectCard = styled.a`
  background-color: #1c1c1c;
  color: #fff;
  border-radius: 8px;
  padding: 1rem;
  border-radius: 15px;
  width: 300px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: #292929;
  }

  &::before, &::after {
    content: "";
    position: absolute;
    border: 3px solid #7c3aed;
    transition: all 0.3s ease;
    opacity: 0;
    z-index: 0;
  }

  &::before {
    top: -10px; /* تغيير المسافة لجعل الزخرفة خارج البطاقة */
    left: -10px;
    width: calc(100% + 30px);
    height: calc(100% + 30px);
    border-radius: 12px;
  }

  &::after {
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border-radius: 8px;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const TechStack = styled.p`
  font-size: 0.875rem;
  color: #b39ddb;
`;

const ViewProjectsButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #7c3aed;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a2bd9;
  }
`;

const projects = [
  {
    title: 'Shoping Website',
    description: 'Welcome to the Shoping Website! This is a Shoping website created by iiShadow11 using PHP, HTML, CSS, and Bootstrap. The website showcases Products and info about it',
    link: 'https://github.com/SrWitty/Shop-Website',
    techStack: 'PHP',
  },
  {
    title: 'Twitter-Clone',
    description: 'Twitter Clone is a social media platform designed by iiShadow, offering a range of features that mimic the popular microblogging and social networking platform, Twitter. This clone is an excellent way to experience the functionalities of Twitter while adding some unique elements.',
    link: 'https://github.com/SrWitty/Twitter-Clone',
    techStack: 'PHP',
  },
  {
    title: 'Logic-Bot',
    description: 'Logic Bot It is Muilt Discord Bot & Open Src Code Make Your Server Professional !',
    link: 'https://github.com/SrWitty/Logic-Bot ',
    techStack: 'JavaScript',
  },
  {
    title: 'Discord V14 Handler',
    description: 'This is a slash command package I built when I was bored. It includes slash commands and optional prefix commands.',
    link: 'https://github.com/SrWitty/Discord-V14-Handler-slash-prefix',
    techStack: 'JavaScript',
  },
  {
    title: 'Emi Bot',
    description: 'Emi Bot Is Bot A Discord multi-purpose Bot ,One of the best bots that supports , Moderation, games and Community commands to make it easier for you to control the server and help in server',
    link: 'https://github.com/SrWitty/Emi-Bot',
    techStack: 'JavaScript',
  },
];

const OpenSourceProjects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <ProjectsContainer>
      <Title>Open Source Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.link}
            target="_blank"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>{project.techStack}</TechStack>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      <ViewProjectsButton
        href="https://github.com/SrWitty?tab=repositories"
        target="_blank"
      >
        View all projects
      </ViewProjectsButton>
    </ProjectsContainer>
  );
};

export default OpenSourceProjects;

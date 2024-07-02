import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTransition, animated } from 'react-spring';
import profileImage from '../assets/images/profile.jpg';
import ReactMarkdown from 'react-markdown';

const technologies = {
  Languages: [
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'PHP', icon: 'https://skillicons.dev/icons?i=php' },
  ],
  'Markup Languages': [
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'Markdown ', icon: 'https://skillicons.dev/icons?i=md' },
  ],
  Frameworks: [
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'TailWind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'BootStrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' }
  ],
  Databases: [
    { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  ],
  Services: [
    { name: 'Replit', icon: 'https://skillicons.dev/icons?i=replit' },
    { name: 'Netlify', icon: 'https://skillicons.dev/icons?i=netlify' },
    { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
  ],
  Others: [
    { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
    { name: 'vscode', icon: 'https://skillicons.dev/icons?i=vscode' }
  ],
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: #070608;  
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 6rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-right: 2rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const ProfileImage = styled.img`
  width: 320px;
  height: auto;
  border-radius: 10px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 240px;
  }
`;

const ImageBackground = styled.div`
  width: 320px;
  height: 500px;
  background-color: #7c3aed;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 240px;
    height: 360px;
  }
`;

const InfoContainer = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
  color: #ffffff;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
`;

const EmojiContainer = styled.div`
  background-color: rgba(124, 58, 237, 0.2);
  padding: 0.3rem;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    margin-right: 0.3rem;
  }
`;

const Description = styled(ReactMarkdown)`
  font-size: 1rem;
  line-height: 1.5;
  color: #ffffff;
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.5rem 1rem;
  background-color: #7c3aed;
  color: white;
  border-radius: 50px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a26a6;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const StatCardWrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const StatCard = styled.div`
  background-color: #111111;
  padding: 1rem 2rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  width: 200px;
  height: 100px;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StatDecoration = styled.div`
  width: 200px;
  height: 100px;
  background-color: #7c3aed;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StatNumber = styled.h3`
  font-size: 2rem;
  color: #7c3aed;
  margin: 0;
`;

const StatText = styled.p`
  font-size: 0.9rem;
  color: #888888;
  margin: 0;
`;

const TechnologiesContainer = styled.div`
  margin-top: 4rem;
  text-align: center;


  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.active ? '#7c3aed' : '#888888')};
  font-size: 1.2rem;
  margin: 0 1rem;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background: #7c3aed;
  }

  @media (max-width: 768px) {
    font-size: .7rem;
    margin: 0 0.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;

const TechnologyIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const TechnologyName = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
`;

const AnimatedHeading = styled.h2`
  font-size: 3rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const About = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  const transitions = useTransition(technologies[activeTab], {
    keys: (item) => item.name,
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  });

  const markdownDescription = `
 # 
 Hello! I am your friendly web wizard who started dancing with JavaScript in the old days, self-taught.

  I live in Egypt and have been active in the world of web development since 2020. I started with HTML and CSS, then moved on to PHP, and gradually transitioned to JavaScript. Currently, I use JavaScript and TypeScript to create web applications and services.

  Recently, I have learned various forms of JavaScript and fallen in love with TypeScript. TypeScript addresses JavaScript’s shortcomings while allowing me to write safer and more readable code. For me, working with TypeScript is like a digital tango – every piece of code and design setting perfecting my projects and making them as functional as a Swiss army knife.

  Guess what? I’ve been part of the Atlas Dev team for almost five years – that’s a lifetime in web years! From battling quirky bugs to celebrating pixel-perfect layouts, I’ve become more attached to my keyboard than to my morning coffee.

  So, buckle up, because I’m on a mission to sprinkle some magic on the web with every quirky and captivating application.

  — Sir.Witty 
  ##
  `;

  return (
    <AboutContainer>
      <TopContainer>
        <ImageContainer>
          <ProfileImage src={profileImage} alt="Profile" />
          <ImageBackground />
        </ImageContainer>
        <InfoContainer>
          <Title>
            <EmojiContainer><span role="img" aria-label="wave">👋</span></EmojiContainer>
            About Me
          </Title>
          <Description>{markdownDescription}</Description>
          <SocialButtons>
            <SocialButton href="https://github.com/SrWitty" target="_blank"><FontAwesomeIcon icon={faGithub} />GitHub</SocialButton>
            <SocialButton href="https://discord.com/users/1091118468155314306" target="_blank"><FontAwesomeIcon icon={faDiscord} />Discord</SocialButton>
            <SocialButton href="https://x.com/SirWitty_1" target="_blank"><FontAwesomeIcon icon={faTwitter} />X</SocialButton>
          </SocialButtons>
        </InfoContainer>
      </TopContainer>
      <StatsContainer>
        <StatCardWrapper>
          <StatDecoration />
          <StatCard>
            <StatNumber>4 Years</StatNumber>
            <StatText>Experience</StatText>
          </StatCard>
        </StatCardWrapper>
        <StatCardWrapper>
          <StatDecoration />
          <StatCard>
            <StatNumber>10+</StatNumber>
            <StatText>Completed Projects</StatText>
          </StatCard>
        </StatCardWrapper>
        <StatCardWrapper>
          <StatDecoration />
          <StatCard>
            <StatNumber>20+</StatNumber>
            <StatText>Clients</StatText>
          </StatCard>
        </StatCardWrapper>
      </StatsContainer>
      <TechnologiesContainer>
        <AnimatedHeading>Technologies I Use</AnimatedHeading>
        <Tabs>
          {Object.keys(technologies).map((tab) => (
            <Tab
              key={tab}
              active={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          ))}
        </Tabs>
        <Content>
          {transitions((style, item) => (
            <animated.div style={style}>
              <Technology key={item.name}>
                <TechnologyIcon src={item.icon} alt={item.name} />
                <TechnologyName>{item.name}</TechnologyName>
              </Technology>
            </animated.div>
          ))}
        </Content>
      </TechnologiesContainer>
    </AboutContainer>
  );
};

export default About;

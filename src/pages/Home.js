import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Carousel from './CarouselComponent';
import "./card.css"
import { styled } from '@mui/material/styles';

// import Sidebar from '../components/Sidebar/Sidebar';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '16px', // Add padding for better spacing on small screens
  boxSizing: 'border-box', // Ensure padding is included in element's size
};

const FancyButton = styled(Button)({
  background: 'black',
  border: 0,
  borderRadius: 10,
  boxShadow: '0 3px 5px 2px rgba(0,0,0,0.25)',
  color: 'white',
  height: 48,
  padding: '0 3.5vh',
  marginLeft: '8px',
  '&:hover': {
      background: 'white',
      color: 'black',
  },
});

const loginButtonStyle = {
  marginTop: '16px', 
};
const Card = ({ title, content, imageUrl }) => (
  <div className='card'>
    {imageUrl && <img src={imageUrl} className="image" alt={title} />}
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);  
// const CARDS = 2
const cardData = [
  {
    imageUrl :'https://www3.ntu.edu.sg/scse/staff/czsun/projects/otfaq/index_files/image158.jpg',
    title: 'Operational Transformation',
    content: 'For Real Time Collaboration without any conflicts',
  },
  {
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*fHD1qA0rCg2Msdv-tAoW3g.jpeg',
    title: 'Socket.io',
    content: 'Low latency, Bi-directional communication between the Client and Server',
  },
  {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/IBM_Cloud_logo.png',
    title: 'IBM Cloud services',
    content: 'IBM DB2 & IBM Cloud Object Storage for storing and fetching user specific documents and information',
  },
  {
    imageUrl:'https://miro.medium.com/v2/resize:fit:800/1*ulCspc56K_swYE1uuel_TA.png',
    title: 'JWT Tokens',
    content: 'Handling the authentication in a secured way using JWT tokens',
  },
  {
    imageUrl:'https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-2015-2017.png',
    title: 'Docker Containerization',
    content: 'Implemention of microservices with three different services running in three separate docker containers',
  },
  {
    imageUrl:'https://www.openvirtualization.pro/wp-content/uploads/2019/07/OpenShift_OVP.png',
    title: 'RedHat OpenShift',
    content: 'Deployment of the Docker containers in the RedHat Openshift for making the application available to everyone',
  }
];
const Home = () => {

    const navigate = useNavigate();
    const loginClick=()=>{
        navigate('/logster');
    }
  return (
    <div style={containerStyle} className='dcf'>
      {/* <Sidebar />s */}
      <h1 style={{textAlign:'center', color: 'black'}}>Welcome to the<br/> Home Page</h1>
      <FancyButton
        variant="contained"
        color="primary"
        style={loginButtonStyle}
        onClick={loginClick}
      >
        Login
      </FancyButton>
      <br></br>
      <div className="app">
        <Carousel>
          {cardData.map((card, index) => (
            <Card
              key={index} 
              imageUrl={card.imageUrl}
              title={card.title}
              content={card.content}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;

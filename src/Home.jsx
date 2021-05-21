import React from 'react';
import web from '../src/Images/img1.png';
import './App.css';
import Common from './Common';

function Home() {
  return (
    <>
      <Common name="Grow Your Business with" buttonName="Get Started" link="/service" imgsrc={web}/>
    </>
  );   
}

export default Home;



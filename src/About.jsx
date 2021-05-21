import React from 'react';
import web from '../src/Images/about.png';
import './App.css';
import Common from './Common';

function About() {
  return (
    <>
      <Common name="Welcome to About Page of " buttonName="Contact Now" link="/contact" imgsrc={web}/>
    </>
  );   
}

export default About;



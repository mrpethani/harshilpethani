import React from 'react';
import web1 from '../src/Images/project-1.png';
import web2 from '../src/Images/project-2.png';
import web3 from '../src/Images/project-3.png';
import web4 from '../src/Images/project-4.png';
import web5 from '../src/Images/project-5.png';
import web6 from '../src/Images/project-6.png';
import './App.css';
import ServiceCard from './ServiceCard';


const p1 = 'http://hp-api-app3.herokuapp.com/';
const p2 = 'https://magic-notes.vercel.app/';
const p3 = 'https://e-commerce-card.vercel.app/';
const p4 = 'https://3-d-navigation-bar.vercel.app/';
const p5 = 'https://rock-paper-scissor-lime.vercel.app/';
const p6 = 'https://interactive-price-card-ruddy.vercel.app/';

const t1 = 'Current Weather Data Project';
const t2 = 'Magic Notes Project';
const t3 = 'E-commerce Project';
const t4 = '3-D Navigation Bar Project';
const t5 = 'Rock Paper Scissor Project';
const t6 = 'Interactive Pricing Card';

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">
          Our Projects
        </h1> 
      </div>
      <div className="container-fluid mb-5 service_div">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <ServiceCard web={web1} projectLink={p1} title={t1}/>
              <ServiceCard web={web2} projectLink={p2} title={t2}/>
              <ServiceCard web={web3} projectLink={p3} title={t3}/>
              <ServiceCard web={web4} projectLink={p4} title={t4}/>
              <ServiceCard web={web5} projectLink={p5} title={t5}/>
              <ServiceCard web={web6} projectLink={p6} title={t6}/>
            </div>
          </div>
        </div> 
      </div>
    </>
  );   
}

export default Service;



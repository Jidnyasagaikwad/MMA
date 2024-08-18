import React from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './CL.css'
import ufc1Image from '../assets/ufc1.jpg';


const CL = () => {

    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

    return (
    <div className="a" data-aos="zoom-in">
    <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img
            src={ufc1Image}
            alt="UFC 1"
            className="a-img"
        />

        </div>
    </div>
    <div className="a-right">
        <h1 className="a-title">UFC 1: The Beginning</h1>
        <p className="a-sub">
        McNichols Sports Arena, Denver, Colorado, USA.
        </p>
        <p className="a-desc">
        UFC 1, held on November 12, 1993, at the McNichols Sports Arena in Denver, Colorado, was a landmark event in the history of mixed martial arts. It was designed to determine the most effective martial art through a no-holds-barred tournament featuring fighters from diverse disciplines, including Brazilian Jiu-Jitsu, boxing, and wrestling. Royce Gracie emerged as the winner, showcasing the superiority of Brazilian Jiu-Jitsu and setting the stage for the evolution of MMA. With minimal rules and no weight classes, UFC 1 was pivotal in shaping the sport, leading to the development of modern MMA regulations and the rise of the UFC as a leading global organization.
        </p>
    </div>
    </div>
    );
  };
  
  export default CL;
import React from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './FaCup.css'
import ufc229 from '../assets/ufc229.jpg';
const FaCup = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

    return (
    <div className="facup" data-aos="zoom-in">
    <div className="fa-left">
        <div className="fa-card bg"></div>
        <div className="fa-card">
        <img
            src={ufc229}
            alt="UFC 229"
            className="fa-img"
        />
        </div>
    </div>
    <div className="fa-right">
        <h1 className="fa-title">UFC 229: Khabib Nurmagomedov vs. Conor McGregor</h1>
        <p className="fa-sub">
        T-Mobile Arena in Las Vegas, Nevada, USA
        </p>
        <p className="fa-desc">
        UFC 229 was a sensational clash at the T-Mobile Arena, where Khabib Nurmagomedov and Conor McGregor faced off in an explosive showdown. The fight was a thrilling display of high stakes and fierce rivalry, with Khabib securing a fourth-round submission victory. The event reached a dramatic peak when Khabib leapt over the cage, sparking post-fight chaos and making UFC 229 one of the most memorable and electrifying moments in MMA history.
        </p>
    </div>
    </div>
    );
}

export default FaCup;
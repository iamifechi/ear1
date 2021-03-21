import React, {useState, useEffect,useCallback} from 'react';
import {Pill, Icon} from '../components/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFunnelDollar} from '@fortawesome/free-solid-svg-icons';

const scrollPosition = window.innerWidth;
const animate=(scroll)=>{
  if(scroll>=2058){
      return 'animate';
  }
return null;
}


const Influencer=(props)=>{

 


  // useEffect(()=>{
  //   handleScroll()
  // },[handleScroll])
    return(
        <>
        <section id="influencer">
          <div className="text-content">
         
            <div className="intro-container">
            <Pill secondary className="pill">influencer</Pill>
            </div>

            
              <h2>Earn money while you chat</h2>
              <p>As an influencer, you get paid by your audience to connect
                with them. That way to maximize time while earning.
              </p>
    
          </div>

          <div className="illustration-container" aria-hidden="true">
            <span className="mobile-illustration"/>
           </div>
        </section>
        <section id="influencer-cont">
          <aside aria-hidden="true">
            <div className="container">
              <div className="inner-container">
                <p className="user">
                  Femi Adekunle<span> has paid and requested
                  for you</span>
                </p>
                <span className="left">Decline</span>
                <span className="right">Accept</span>
              </div>
            </div>
          </aside>
          <div className="text-content">
            <div className="intro-container">
            <Pill secondary className="pill">influencer</Pill>
            <Icon secondary className="icon">
              <FontAwesomeIcon icon={faFunnelDollar}/>
            </Icon>
            </div>

          
            <h2>Filter the noise in the dm's</h2>
            <p>Ear1 helps you get rid of all the noise in your dm's across
              other social media apps. This way, you are sure to connect with 
              serious people and make genuine business and personal connections.
            </p>
          </div>
        </section>
        
        </>
    )
}

export default Influencer
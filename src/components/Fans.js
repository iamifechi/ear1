import React, {useEffect} from 'react';
import styled,{css} from 'styled-components';
import {Pill, Icon} from '../components/index';
import { _slide1, _slide2, _slide3, _slide4} from '../assets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText,faChevronLeft, faMicrophone} from '@fortawesome/free-solid-svg-icons';


const Img = styled.img`
width:250px;
height:300px;
position:absolute;
top:0;
right:0;
left:0;
margin:auto;
animation:index infinite;
animation-duration:4s;


@keyframes index{
 0%{
   z-index:4;
 }
 25%{
  z-index:3;
 }
 50%{
   z-index:2; 
 }
 75%{
   z-index:1;
 }
 100%{
  z-index:0;
  }
}

${props => props.slide && css`
animation-delay:${props.slide}s;
`}

${props => props.slide===1 && css`
transform:rotate(2deg);
background:url(${_slide1}) center / cover no-repeat;
`}

${props => props.slide===2 && css`
  transform:rotate(-2deg);
  background:url(${_slide2}) center / cover no-repeat;
`}

${props => props.slide===3 && css`
 transform:rotate(4deg);
 background:url(${_slide3}) center / cover no-repeat;
`}

${props => props.slide===4 && css`
  transform:rotate(-1deg);
  background:url(${_slide4}) center / cover no-repeat;
`}
`
const imageList = [_slide1, _slide2, _slide3, _slide4];


const renderImages =() =>{
    return imageList.map((image,index)=>{
       return <Img key={`image${index}`} 
                    src={image} 
                    alt={`celeb image ${index}`}
                    className="slides" 
                    slide={index}
                />
    })
  }


const animate=(scroll)=>{
  if(scroll>=2058){
      return 'animate';
  }
return null;
}


const Fans=(props)=>{
 

  useEffect(()=>{
    imageList.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  },[])
 
    return(
        <>
        <section id="connect">
          <aside className='celeb-img-container'>
           {renderImages()}
         </aside>

          <div className="text-content">
            <div className="intro-container">
              <Pill primary className="pill">Fans</Pill>
            </div>
             <h2>Connect with top influencers in your field</h2>
            <p>From Tech to music to business, Ear1 has a wide range of industry experts in diverse
              fields you have always wanted to connect with. Now is your best chance.
            </p>
          </div>

         
        </section>
        <section id="fans">
          <div className="text-content">
          <div className="intro-container">
            <Pill primary>Fans</Pill>
            <Icon primary>
              <FontAwesomeIcon icon={faEnvelopeOpenText}/>
            </Icon>
          </div>
          
            <h2>Be assured of replies</h2>
            <p>With ear1, we assure you of getting a response to your messages.
            Don't be part of the noise in the dms. Get ahead of the game by paying a small fee
            </p>
          </div>

          <aside aria-hidden="true">
            <div className="container">
              <header className="top box">
                <FontAwesomeIcon icon={faChevronLeft}/>
                 <p className="user">Chris Ekpengyong</p>
              </header>
              <div className='chat-area'>
              <span className="right">
                Hey Boss, I am Charles an upcoming producer and 
                I make beats which I'd like you to hear
              </span>
              <span className="left">Hey, Nice to meet you</span>
              <span className="left">I'm not looking to hire a producer</span>
              </div>
              <div className="bottom box" >
                <div className="textBox">
                  <span className={props.scroll>=2058?'animate':null}>Sorry, Another time</span>
                  <FontAwesomeIcon icon={faMicrophone} className="mic-icon"/>
                </div>
              </div>
            </div>
          </aside>
        </section>
        
        </>
    )
}

export default Fans
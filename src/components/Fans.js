import styled,{css} from 'styled-components';
//import {useEffect,useState} from 'react';
import {Pill, Icon} from '../components/index'
import { _slide1, _slide2, _slide3, _slide4} from '../assets/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText,faChevronLeft, faMicrophone} from '@fortawesome/free-solid-svg-icons';

const Image = styled.span`
  width:250px;
  height:290px;
  position:absolute;
  top:0;
  right:0;
  left:0;
  margin:auto;
  background:white;
  animation:rotate infinite;
  animation-duration:4s;
  outline:1px solid green;

  @keyframes swipe{
    from{
      margin-right:auto;
      opacity:1;
    }
    to{
      margin-right:-120%;
      opacity:0;
    }
  }

  @keyframes rotate{
   0%{
     z-index:4;
     animation: swipe 0.9s ease-in-out;
   }
   25%{
    z-index:3;
    opacity:1;
    margin-right:auto;
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
  animation-delay:${props.slide - 1}s;
  `}
  
  ${props => props.slide===1 && css`
  background:url(${_slide1}) center / cover no-repeat;
  transform:rotate(2deg);

  `}

  ${props => props.slide===2 && css`
    background:url(${_slide2}) center / cover no-repeat;
    transform:rotate(-3deg);
  `}

   ${props => props.slide===3 && css`
    background:url(${_slide3}) center / cover no-repeat;
    transform:rotate(4deg);
    `}

  ${props => props.slide===4 && css`
    background:url(${_slide4}) center / cover no-repeat;
    transform:rotate(-1deg);
  `}

`

function Fans(){
    
    
    

    
    return(
        <>
        <section id="connect">
          <aside className="celeb-img-container">
           <Image className="slides" slide={1}  />
           <Image className="slides" slide={2} />
           <Image className="slides" slide={3} />
           <Image className="slides" slide={4} />
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
              <header className="profile">
                <FontAwesomeIcon icon={faChevronLeft}/>
                 <p className="user">Chris Ekpengyong</p>
              </header>
              <span className="right">
                Hey Boss, I am Charles an upcoming producer and 
                I make beats which I'd like you to hear
              </span>
              <span className="left">Hey, Nice to meet you</span>
              <span className="left">I'm not looking to hire a producer</span>
              <span className="textBox">
                <input value="Sorry, Another time" readOnly/>
                <FontAwesomeIcon icon={faMicrophone} className="input-icon"/>
              </span>
            </div>
          </aside>
        </section>
        
        </>
    )
}

export default Fans
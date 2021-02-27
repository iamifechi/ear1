import React from 'react';
import './App.css';
import logo from './assets/ear1-logo.svg';
import styled,{css} from 'styled-components';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFunnelDollar,faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';

const Social = styled.a`
    ${props => props.twitter && css`
    background: url(./assets/twitter.svg) center center;
    color: black;
  `}

`

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      toggle:null,
      size:0
    }
  }

  handleToggle=()=>{
    let width = window.innerWidth;
    if(!this.state.toggle && width < 762){
       this.setState({
        toggle:true
      },()=>{
        console.log(":::::Toggle:::");
        document.body.style.overflow="hidden";
      })
    }
      else{
        this.setState({
            toggle:false
          },()=>{
            document.body.style.overflow="visible";
        })
      }
      
  }

  handleResize=()=>{
   
    window.onresize=()=>{
      let width = window.innerWidth;
      this.setState({size:width},
        ()=>{
          if(width>767){
            this.setState({toggle:false});
            document.body.style.overflow="visible"
            }
        });      
      };  
      
    window.onscroll=()=>{
      let height = window.scrollY; 
      if(height>0){
          document.getElementById("toggle-btn").style.display="none";
       }
       else{
        document.getElementById("toggle-btn").style.display="";
       }
    }
  }

  componentDidMount(){
    let widthOnLoad = window.innerWidth;
    this.setState({size:widthOnLoad},
      ()=>this.handleResize())  
  }

  render(){
    return(
      <>
      <nav id="topnav">
        <header id="brand-logo">
           <img src={logo} alt="ear1 Logo" />
        </header>

        <ul id="nav" className={this.state.toggle?"toggle":""}>
          <li><a href="/" onClick={this.handleToggle}> Home </a></li>
          <li><a href="#fans" onClick={this.handleToggle}> For fans </a></li>
          <li><a href="#influencer" onClick={this.handleToggle}> For Influencer </a></li>
          <li><a href="#features" onClick={this.handleToggle}> Features </a></li>
          <li><a href="/" onClick={this.handleToggle}> FAQ's </a></li>

          <div id="toggle-btn" onClick={this.handleToggle} 
              className={this.state.toggle?"close":"open"}>
            <span className="bars"></span>
            <span className="bars"></span>
            <span className="bars"></span>
          </div>
        </ul>
      </nav>
      <main id="main">
        <section id="hero-section">
          <h1> 
          Build direct meaningful connections
          </h1>
          <p>Ear1 helps you connect directly with your favourite influencers for a small fee. 
            What’s more? We assure you of getting a reply.</p>
        
          <div className="store-btns">
            <a href="/" className="google-play">Get in on Google Play</a>
            <a href="/" className="apple-store">download on the App Store</a>
          </div>

          <span className="mobile-illustration"/>
        
        </section>
        <section id="about">
          <div className="text-content">
            <h2>What can Ear1 help you do?</h2>
            <p>Are you an individual looking to connect with an influencer without 
              the hassle of waiting for the reply over a long time, 
              or an influencer looking to filter your dm’s and connect with your 
              audience, Ear1 has got you covered.</p>
          </div>
        </section>
        <section id="connect">
          <div className="celeb-img-container"></div>
          <div class="text-content">
            <div className="intro-container">
              <span className="pill">Fans</span>
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
            <span className="pill">Fans</span>
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelopeOpenText}/>
            </span>
          </div>
          
            <h2>Be assured of replies</h2>
            <p>With ear1, we assure you of getting a response to your messages.
            Don't be part of the noise in the dms. Get ahead of the game by paying a small fee
            </p>
          </div>
          
        </section>
        <section id="influencer">
          <div className="text-content">
          <div className="content-box">
            <div className="intro-container">
              <span className="pill">influencer</span>
            </div>

            
              <h2>Earn money while you chat</h2>
              <p>As an influencer, you get paid by your audience to connect
                with them. That way to maximize time while earning.
              </p>
            </div>
          </div>

          <div className="illustration-container" aria-hidden="true">
            <span className="mobile-illustration"/>
           </div>
        </section>
        <section id="influencer-cont">
          <div className="text-content">
            <div className="intro-container">
              <span className="pill">influencer</span>
              <span className="icon">
                <FontAwesomeIcon icon={faFunnelDollar}/>
              </span>
            </div>

          
            <h2>Filter the noise in the dm's</h2>
            <p>Ear1 helps you get rid of all the noise in your dm's across
              other social media apps. This way, you are sure to connect with 
              serious people and make genuine business and personal connections.
            </p>
          </div>
          
        </section>
        <section id="features">
          <div className="text-content">
          <h2>The ear1 features</h2>
          <ul id="features-list">
            <li>
              <span aria-hidden="true"></span>
              <h3>Ease of use</h3>
              <p>With as simple as 3 steps, you can get started using ear1.</p>
            </li>
            <li>
              <h3>Multi currency support</h3>
              <p>Ear1 allows you to pay with a wide range of currencies.</p>
            </li>
            <li>
              <h3>Secure communication</h3>
              <p>State of the art end to end encryption of messages. 
                No weird sort of tracking. Your privacy is our concern</p>
            </li>
          </ul> 
          </div>
          <div className="illustration-container" aria-hidden="true">
              <span className="mobile-illustration"/>
            </div> 
            
        </section>
        <section id="call-to-action">
          
          <div className="container">
             <div className="illustration-container" aria-hidden="true">
              <span className="mobile-illustration"/>
            </div> 
           
             <div class="text-content">
              <h1>
                Get ahead of your game
              </h1>
              <p>Save time and effort. Ear1 is your best choice</p>
            
              <div class="store-btns">
                <a href="/" className="google-play">Get in on Google Play</a>
                <a href="/" className="apple-store">download on the App Store</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
                <form>
                  <h2>
                    Be in the know.
                    <span> Get access to amazing offers and discounts. </span> 
                  </h2>
                  <input type="email" id="email" 
                  placeholder="Enter your email address" className="email-input"/>
                  <button class="submit-btn">Submit</button>
                </form>

                <div className="socials">
                  <a href="/" className="logo">Ear1</a>
                  <ul>
                    <li>
                    <a href="/" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF}/>
                      </a>
                    </li>

                    <li>
                      <a href="/" target="_blank">
                        <FontAwesomeIcon icon={faTwitter}/>
                      </a>
                    </li>

                    <li>
                    <a href="/" target="_blank">
                      <FontAwesomeIcon icon={faInstagram}/>
                      </a>
                    </li>
                  </ul>
                </div>

                <nav class="footer-nav">
                  <ul>
                    <header>Links</header>
                    <li><a href="/">Home</a></li>
                    <li><a href="#fans">For fans</a></li>
                    <li><a href="#influencer">For Influencers</a></li>
                    <li><a href="/">FAQ's</a></li>
                  </ul>
                  <ul>
                    <header>Get help</header>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">FAQ's</a></li>
                    <li><a href="/">Partnership</a></li>
                  </ul>
                  <ul>
                    <header>Download</header>
                    <li><a href="/">Android</a></li>
                    <li><a href="/">IOS</a></li>
                  </ul>

                  <ul>
                    <header>Resource</header>
                    <li><a href="/">Terms of service</a></li>
                    <li><a href="/">Privacy policy</a></li>
                  </ul>
                </nav>
              </footer>

      </>
    )
  }
  
}

export default App;

import React from 'react';
import './App.css';
import {
  Nav, 
  Fans , 
  Influencer, 
  Features, 
  CALL_TO_ACTION,
  Footer} from './components/index'


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      toggle:null,
      size:0,
      scroll:null,
      slide:4,
      count:1,
    }
  }
  timer;

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
  }

  handleScroll=()=>{
    window.onscroll =()=>{
      this.setState({scroll:window.scrollY},
        ()=>{
          console.log("SCROLLLLL:::",this.state.scroll);
        })
    };
  }

  handleResize=()=>{
    window.onresize =()=>{
      this.setState({size:window.innerWidth});
    };
  }

animate_images=()=>{

  // if(this.state.scroll >= 72 && this.state.size>=762){
  //   document.body.scrollTop = 272;
  //   document.documentElement.scrollTop = 272;

  //   return 'animate mobile-illustration';
  // }
  if(this.state.scroll>=277){
  
      return 'animate mobile-illustration';
  }
  return 'mobile-illustration';
}


  componentDidMount(){
    this.handleScroll();
    this.handleResize();
    let widthOnLoad = window.innerWidth;
    this.setState({size:widthOnLoad},
      ()=>this.handleResize())  
  }

  render(){
    return(
      <>
      <Nav toggle={this.state.toggle} handleToggle={this.handleToggle}/>
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

          <span className={this.animate_images()}/>
        
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
          <Fans scroll={this.state.scroll}/>
          <Influencer scroll={this.state.scroll}/>
          <Features />
          <CALL_TO_ACTION />
         </main>
     <Footer />
      </>
    )
  }
  
}

export default App;

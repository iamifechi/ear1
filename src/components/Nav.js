import logo from '../assets/ear1-logo.svg';

function Nav(props){
    const handleToggle = props.handleToggle;
    
    return(
        <>
        <nav id="topnav">
        <header id="brand-logo">
           <img src={logo} alt="ear1 Logo" />
        </header>

        <ul id="nav" className={props.toggle?"toggle":""}>
          <li><a href="/" onClick={handleToggle}> Home </a></li>
          <li><a href="#fans" onClick={handleToggle}> For fans </a></li>
          <li><a href="#influencer" onClick={handleToggle}> For Influencer </a></li>
          <li><a href="#features" onClick={handleToggle}> Features </a></li>
          <li><a href="/" onClick={handleToggle}> FAQ's </a></li>

          <div id="toggle-btn" onClick={handleToggle} 
              className={props.toggle?"close":"open"}>
            <span className="bars"></span>
            <span className="bars"></span>
            <span className="bars"></span>
          </div>
        </ul>
      </nav>
      
        </>
    )
}

export default Nav
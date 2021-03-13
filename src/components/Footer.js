import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer(props){
    return(
        <>
         <footer id="footer">
                <form>
                  <h2>
                    Be in the know.
                    <span> Get access to amazing offers and discounts. </span> 
                  </h2>
                  <input type="email" id="email" 
                  placeholder="Enter your email address" className="email-input"/>
                  <button className="submit-btn">Submit</button>
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

                <nav className="footer-nav">
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

export default Footer
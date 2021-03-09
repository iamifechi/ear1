function Features(props){
    return(
        <>
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
        </>
    )
}

export default Features
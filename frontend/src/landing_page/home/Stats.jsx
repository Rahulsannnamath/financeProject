import React from 'react'

function Stats() {
    return ( 
     <div className='container mt-5 mb-5'>
       <div className="row">
       <div className="col-6">
        <h1>Built for Trust</h1>
        <div style={{ marginTop: "50px", marginRight: "30px" }}>
  <h3>Customer-first by design</h3>
  <p>
    That’s why investors choose our platform to manage equity, mutual funds, and digital assets with clarity and control — all under one intuitive dashboard.
  </p>

  <h3 className="mt-5">No noise, just value</h3>
  <p>
    No pushy notifications. No spam. Just a clean, distraction-free experience designed to help you focus on your investments, not chase trends.
  </p>

  <h3 className="mt-5">More than a trading app</h3>
  <p>
    Our ecosystem integrates tools for market insights, smart fund management, and real-time tracking — tailored to both beginners and seasoned investors.
  </p>

  <h3 className="mt-5">Grow smarter</h3>
  <p>
    With features like investment nudges, risk alerts, and capital protection tools, our platform helps you build a better financial future — not just transact.
  </p>
</div>

       </div>
       <div className="col-6 " ><img src="ecosystem.png" alt="eco"  style={{width : "80%" , marginLeft:"90px"}}/></div>

       </div>
     </div>


    );
}

export default Stats;
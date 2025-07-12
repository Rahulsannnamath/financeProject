import React from 'react'
function Awards(){
return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-6">
          <img src="largestBroker.svg" alt="" />
        </div>

        <div className="col-6">
        <h1>Largest Stock Broker in the Market and Trusted by Users</h1>
        <p>Over 2M+ Trusted users</p>

        <div className='row'>
          <div className='col-6'>
            <ul>
            <li className='mt-4'>Futures and Options</li>

             <li className='mt-4'>Commodity derivatives</li>

            <li className='mt-4'>Currency derivatives</li>
            </ul>
          </div>

          <div className='col-6'>
            <ul>   
            <li className='mt-4'>Stocks and IPOs</li>
            <li className='mt-4'> Direct Mutual Funds</li> 
            <li className='mt-4'>Bonds and Goverment policies</li> 
            </ul>
            
          </div>
        </div>


        </div>

      </div>
      <br /> <br /> <br />
</div>
)
}


export default Awards;
import React, { useState } from 'react';


function PricingPage() {
  const [activeTab, setActiveTab] = useState('equity');

  const renderTabContent = () => {
    if (activeTab === 'currency') {
      return (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Segment</th>
                <th>Currency Futures</th>
                <th>Currency Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20 / executed order (whichever is lower)</td>
                <td>Flat ₹20 / executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Transaction Charges</td>
                <td>0.0009%</td>
                <td>0.035% (on premium)</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + transaction charges)</td>
                <td>18% on (brokerage + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp Charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  
    if (activeTab === 'commodity') {
      return (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Segment</th>
                <th>Commodity Futures</th>
                <th>Commodity Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20 / executed order (whichever is lower)</td>
                <td>Flat ₹20 / executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side</td>
                <td>0.05% on sell side (on premium)</td>
              </tr>
              <tr>
                <td>Transaction Charges</td>
                <td>0.0026%</td>
                <td>0.05% (on premium)</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + transaction charges)</td>
                <td>18% on (brokerage + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp Charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  
    // Default: Equity
    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Segment</th>
              <th>Equity Delivery</th>
              <th>Equity Intraday</th>
              <th>F&O Futures</th>
              <th>F&O Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or ₹20 / executed order (whichever is lower)</td>
              <td>0.03% or ₹20 / executed order (whichever is lower)</td>
              <td>Flat ₹20 / executed order</td>
            </tr>
            <tr>
              <td>STT/CTT</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on sell side</td>
              <td>0.01% on sell side</td>
              <td>0.05% on sell side (on premium)</td>
            </tr>
            <tr>
              <td>Transaction Charges</td>
              <td>NSE: 0.00325% BSE: 0.00375%</td>
              <td>NSE: 0.00325% BSE: 0.00375%</td>
              <td>0.0021%</td>
              <td>0.053% (on premium)</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>18% on (brokerage + transaction charges)</td>
              <td>18% on (brokerage + transaction charges)</td>
              <td>18% on (brokerage + transaction charges)</td>
              <td>18% on (brokerage + transaction charges)</td>
            </tr>
            <tr>
              <td>SEBI Charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>Stamp Charges</td>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Charges</h2>
        <p className="text-muted">List of all charges and taxes</p>
        <div className="row mt-5">
          <div className="col-md-4">
            <img src="/pricing-eq.svg" alt="Free Equity Delivery" className="mb-3" />
            <h3>&#8377;0</h3>
            <p className="fw-bold">Free equity delivery</p>
            <p className="text-muted">All equity delivery investments (NSE, BSE) are absolutely free — &#8377; 0 brokerage.</p>
          </div>
          <div className="col-md-4">
            <img src="/other-trades.svg" alt="Intraday and F&O" className="mb-3" />
            <h3>&#8377;20</h3>
            <p className="fw-bold">Intraday and F&O trades</p>
            <p className="text-muted">Flat &#8377;20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat &#8377;20 on all option trades.</p>
          </div>
          <div className="col-md-4">
            <img src="/pricing-eq.svg" alt="Free Direct MF" className="mb-3" />
            <h3>&#8377;0</h3>
            <p className="fw-bold">Free direct MF</p>
            <p className="text-muted">All direct mutual fund investments are absolutely free — &#8377; 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>

      {/* Tab Section */}
      <div className="text-center my-4">
        <ul className="nav nav-tabs justify-content-center mb-3">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'equity' ? 'active' : ''}`}
              onClick={() => setActiveTab('equity')}
            >
              Equity
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'currency' ? 'active' : ''}`}
              onClick={() => setActiveTab('currency')}
            >
              Currency
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'commodity' ? 'active' : ''}`}
              onClick={() => setActiveTab('commodity')}
            >
              Commodity
            </button>
          </li>
        </ul>
        {renderTabContent()}
      </div>

      {/* Call to Action */}
      <div className="text-center my-4">
        {/* <a href="#" className="btn btn-outline-primary">
          Calculate your costs upfront using our brokerage calculator
        </a> */}
      </div>

      {/* Footer Note */}
      {/* <div className="text-muted small text-center mt-5">
        * The rest of the page contains static charge explanations and fine print, which can be added as needed.
      </div> */}
    </div>
  );
}

export default PricingPage;

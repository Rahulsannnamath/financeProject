import React, { useState, useEffect } from "react";

const Summary = () => {
  const [currentValue, setCurrentValue] = useState(31430);
  const [investment, setInvestment] = useState(29880);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFluctuation = Math.floor(Math.random() * 300 - 150); // smaller range for smooth fluctuation
      setCurrentValue((prev) => prev + randomFluctuation);
    }, 1000); // 🔁 every 1 second

    return () => clearInterval(interval); // cleanup
  }, []);

  const pnl = currentValue - investment;
  const pnlPercent = ((pnl / investment) * 100).toFixed(2);

  return (
    <div className="section">
      <p>Holdings (13)</p>
      <div className="data">
        <div className="first">
          <h3 className={pnl >= 0 ? "profit" : "loss"}>
            ₹{pnl.toLocaleString()}{" "}
            <small>{pnl >= 0 ? "+" : ""}{pnlPercent}%</small>
          </h3>
          <p>Net P&L</p>
        </div>
        <hr />
        <div className="second">
          <p>Current Value: <span>₹{currentValue.toLocaleString()}</span></p>
          <p>Investment: <span>₹{investment.toLocaleString()}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Summary;

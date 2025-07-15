import axios from "axios";
import React, { useEffect, useState } from "react";


const Positions = () => {
  const [positions,setPositions] = useState([]);
  useEffect(()=>{
    axios.get("https://fincrux.onrender.com/allpositions").then((res)=>{
      setPositions(res.data);
    }).catch((err)=>{
      console.log(err);
    });
  },[])
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.slice(0, 3).map((pos, index) => (
              <tr key={index}>
                <td>{pos.product}</td>
                <td>{pos.name}</td>
                <td>{pos.qty}</td>
                <td>{pos.avg}</td>
                <td>{pos.price}</td>
                <td style={{ color: pos.isLoss ? "red" : "green" }}>{pos.net}</td>
                <td style={{ color: pos.isLoss ? "red" : "green" }}>{pos.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;

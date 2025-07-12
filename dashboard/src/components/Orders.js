import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      name: 'AAPL',
      price: 195.36,
      qty: 10,
      mode: 'buy'
    },
    {
      name: 'TSLA',
      price: 265.12,
      qty: 5,
      mode: 'buy'
    },
    {
      name: 'GOOGL',
      price: 135.50,
      qty: 8,
      mode: 'sell'
    }
  ]);

  useEffect(()=>{
  axios.get("http://localhost:8080/showOrders").then((res)=>{
    setOrders(res.data);
    
  }).catch((err)=>{
    console.log(err);
  });
  },[]);
  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

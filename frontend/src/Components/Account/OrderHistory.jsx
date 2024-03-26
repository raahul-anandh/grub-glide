import React, { useState } from 'react';

function OrderHistory(){
    const [orders, setOrders] = useState([
        {
          id: 1,
          date: '2024-03-20',
          items: [
            { name: 'Veg Noodles', quantity: 1, price: 100,},
            { name: 'Egg Noodles', quantity: 1, price: 110 },
          ],
          total: 210,
          status: 'Delivered',
        },
        {
          id: 2,
          date: '2024-03-18',
          items: [
            { name: 'Veg Fried Rice', quantity: 1, price: 120 },
            { name: 'Chilli Paneer', quantity: 1, price: 120 },
          ],
          total: 240,
          status: 'Pending',
        },
      ]);

    return (
        <div className="order-history">
            <h2>Order History</h2>
            <table>
              <thead>
                <tr>
                  <th>Order Date</th>
                  <th>Items</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.date}</td>
                    <td>
                      <ul>
                        {order.items.map((item, index) => (
                          <li key={index}>{item.name}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                      {order.items.map((item, index) => (
                          <li key={index}>{item.quantity}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                      {order.items.map((item, index) => (
                          <li key={index}>{item.price}</li>
                        ))}
                      </ul>
                    </td>
                    <td>₹{order.total.toFixed(2)}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    )
}
export default OrderHistory;
import React, { useState } from 'react';

function OrderHistory(){
    const [orders, setOrders] = useState([
        {
          id: 1,
          date: '2024-03-20',
          items: [
            { name: 'Pizza', price: 10.99 },
            { name: 'Burger', price: 6.99 },
          ],
          total: 17.98,
          status: 'Delivered',
        },
        {
          id: 2,
          date: '2024-03-18',
          items: [
            { name: 'Salad', price: 8.49 },
            { name: 'Smoothie', price: 4.99 },
          ],
          total: 13.48,
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
                    <td>${order.total.toFixed(2)}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    )
}
export default OrderHistory;
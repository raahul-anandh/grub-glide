import React, { useState } from 'react';
import Orders from '../Orders';

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

      return(
        <Orders orders={orders}/>
      )
    
}
export default OrderHistory;
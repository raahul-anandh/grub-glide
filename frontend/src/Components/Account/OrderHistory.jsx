import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Orders from '../Orders';

function OrderHistory(){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetching user ID from localStorage
        const userId = localStorage.getItem('user');

        // Fetch orders for the user from the backend
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/plateform/orders/${userId}`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return(
        <Orders orders={orders}/>
    );
}

export default OrderHistory;

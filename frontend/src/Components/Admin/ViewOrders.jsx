import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Orders from '../Orders';

function ViewOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:4000/plateform/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const updateOrderStatus = async (orderId, currentStatus) => {
        try {
            // Determine the new status based on the current status
            const newStatus = currentStatus === "Pending" ? "Delivered" : "Pending";
            
            // Make a request to update/revert the order status
            await axios.put(`http://localhost:4000/plateform/update-order/${orderId}`, {
                status: newStatus
            });

            // Refetch orders after updating/reverting status
            fetchOrders();
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    return <Orders orders={orders} updateOrderStatus={updateOrderStatus} view="admin" margin="6%" />;
}

export default ViewOrders;

import React from 'react';

function Orders({ orders, updateOrderStatus, view }) {
    const handleUpdateStatus = (orderId) => {
        // Calling the function passed from props to update the status
        updateOrderStatus(orderId);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
    
        // Formatting the date
        const formattedDate = date.toLocaleDateString();
        
        // Formatting the time
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        
        // Combining date and time
        const formattedDateTime = `${formattedDate}, ${formattedTime}`;

        return formattedDateTime;
    };

    return (
        <div className="order-history">
            <h2>Order History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order Date</th>
                        {view === "admin"
                         ? (<th>Customer</th>)
                         : ""
                        }
                        <th>Items</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Status</th>
                        {view === "admin"
                         ? (<th>Action</th>)
                         : ""
                        }
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{formatDate(`${order.date}`)}</td>
                            <td>{order.user}</td>
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
                            { view === "admin"
                                ?
                                (<td>
                                    <button onClick={() => handleUpdateStatus(order._id)}>Update Status</button>
                                </td>)
                                : ""

                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;

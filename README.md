
# College Cafeteria Food Ordering Website

## Overview

This project is a web-based food ordering system designed specifically for our college cafeteria. Utilizing Restful API architecture, this system provides a seamless and efficient way for students and staff to order meals online.

## Collaboration

This project is a collaborative effort between Raahul Anandh B[myself] and Smriti Vipin Madangarli. You can find the same repository in both of our GitHub profiles, reflecting our joint contributions to this initiative.

## Features

- **User Registration and Authentication**: Secure login and registration for students and staff.
- **Menu Management**: Dynamic display of available food items categorized for easy browsing.
- **Order Placement**: Simple and intuitive interface for placing orders.
- **Order Tracking**: Real-time updates on the status of orders.
- **Payment Integration**: Secure payment gateway for hassle-free transactions.
- **Admin Panel**: For cafeteria staff to manage orders, update menu items, and monitor system usage.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: Custom-built Restful APIs for efficient data handling
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: [Specify Payment Gateway used]

## Installation and Setup

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/food-ordering-website.git
   ```

2. **Navigate to the project directory**:
   ```sh
   cd food-ordering-website
   ```

3. **Install dependencies**:
   ```sh
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add the necessary configurations.
   ```plaintext
   DB_CONNECTION=<your_database_connection_string>
   JWT_SECRET=<your_jwt_secret>
   PAYMENT_GATEWAY_API_KEY=<your_payment_gateway_api_key>
   ```

5. **Run the application**:
   ```sh
   npm start
   ```

6. **Access the website**:
   Open your browser and go to `http://localhost:3000`

## Usage

1. **User Registration/Login**:
   - Users can sign up or log in using their email and password.
   
2. **Browsing the Menu**:
   - Users can browse the available food items and select their desired meals.

3. **Placing Orders**:
   - Users can add items to their cart and proceed to checkout to place an order.

4. **Order Tracking**:
   - After placing an order, users can track the status in real-time until the order is ready for pickup.

5. **Admin Panel**:
   - Cafeteria staff can use the admin panel to manage menu items, view and process orders, and generate reports.

## Contributing

We welcome contributions from the community. If you have suggestions or improvements, please feel free to create a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

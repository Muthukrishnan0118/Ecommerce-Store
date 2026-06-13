# 🛒 Ecommerce Store

A full-stack Ecommerce Web Application built using React, Redux Toolkit, Node.js, Express, and MongoDB.

## 🚀 Features

### User Features

* User Registration & Login
* JWT Authentication
* Browse Products
* Search Products
* Filter Products by Category
* Product Details Page
* Add to Cart
* Wishlist
* Checkout Process
* Place Orders
* View Order History
* Product Reviews & Ratings

### Admin Features

* Admin Dashboard
* Manage Products
* Create Product
* Edit Product
* Delete Product
* Manage Orders
* Mark Orders as Delivered
* Manage Users
* Promote/Demote Admin Users
* Revenue Statistics
* Product Statistics
* User Statistics

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Axios
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

## 📁 Project Structure

```text
Ecommerce-store
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── .gitignore
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Ecommerce-store.git
cd Ecommerce-store
```

---

### Backend Setup

```bash
cd server
npm install
npm run server
```

Backend runs on:

```text
http://localhost:5000
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📸 Main Modules

### Authentication

* Register User
* Login User
* Protected Routes
* Admin Routes

### Products

* Product Listing
* Search Products
* Category Filter
* Product Reviews

### Cart

* Add to Cart
* Remove from Cart
* Quantity Management

### Orders

* Checkout
* Place Order
* My Orders
* Admin Order Management

### Admin Dashboard

* Product Management
* Order Management
* User Management
* Revenue Tracking

---

## 🎯 Future Improvements

* Product Sorting
* Pagination
* Payment Gateway Integration (Razorpay/Stripe)
* Image Upload with Cloudinary
* Sales Reports
* Coupon System
* Email Notifications
* Dark Mode
* Responsive Mobile Design

---

## 👨‍💻 Author

Muthukrishnan

Built as a Full Stack Ecommerce Project using MERN Stack.

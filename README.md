# Smart Village Portal 🏡

A full-stack MERN web application designed to digitally empower rural communities by connecting citizens with essential local services and service providers.

---

## 🚀 Features

- Local service discovery by category  
- Secure user authentication using JWT  
- Service provider dashboard for managing services  
- Role-based access control (User / Provider / Admin)  
- Fully responsive, mobile-first UI  
- Search and filtering for services  
- Scalable MERN stack architecture  

---

## 🛠️ Tech Stack

Frontend:
- React
- Material UI
- React Router
- Axios

Backend:
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt for password hashing

---

## 📦 Installation & Setup

Prerequisites:
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm

Clone Repository:
git clone https://github.com/dhiraj352005/Village-Connect.git
cd Village-Connect

Backend Setup:
cd backend
npm install

Create `.env` file in backend directory with:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smartvillage
JWT_SECRET=smart_village_secret

Start backend server:
npm run dev

Frontend Setup:
cd ../frontend
npm install
npm start

Application URLs:
Frontend → http://localhost:3000  
Backend → http://localhost:5000

---

## 🗄️ Database Models

User Model:
{
  name,
  email,
  password,
  role,
  address,
  createdAt
}

Service Model:
{
  title,
  description,
  category,
  location,
  provider,
  createdAt
}

---

## 🎯 Project Overview

The Smart Village Portal enables:
- Villagers to discover nearby essential services  
- Local providers to digitally promote services  
- Administrators to manage users and services  

This project simulates real-world rural digitalization using the MERN stack.

---

## 🚀 Future Enhancements

- Government schemes and subsidy portal  
- Complaint and grievance management system  
- Village notices and announcements  
- Admin analytics dashboard  

---

## 👨‍💻 Developer

Dhiraj  
B.Tech Information Technology  
MERN Stack Developer  

GitHub: https://github.com/dhiraj352005

---

## 📄 License

MIT License

---

Built for digital empowerment of rural communities 🌱

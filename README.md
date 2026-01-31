# VillageConnect 🏘️

A modern MERN stack application connecting rural communities with local services and service providers.

## 🚀 Features

- **Service Discovery**: Browse and search for local services by category
- **User Authentication**: Secure registration and login system
- **Service Management**: Providers can create and manage their services
- **Responsive Design**: Beautiful Material-UI interface that works on all devices
- **Real-time Data**: Dynamic service listings with search and filtering
- **Mock Data Fallback**: Robust fallback system when database is unavailable

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Material-UI (MUI)** - Beautiful, accessible UI components
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/codewithshxbh/VillageConnect.git
cd VillageConnect
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory (copy from `.env.example`):
```bash
cp .env.example .env
```

Then update the `.env` file with your configuration:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/villageconnect
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

Start the backend server:
```bash
npm run dev
# or
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3001
- **Backend API**: http://localhost:5000

## 🌟 Key Components

### Service Categories
- 🌾 Agriculture
- 🏗️ Construction  
- 📚 Education
- 🏥 Healthcare
- 💻 Technology
- 🚗 Transportation
- 🏡 Home Services
- 💼 Business Consultation

### Core Features
- **Home Page**: Hero section with search and featured services
- **Services Listing**: Complete service catalog with filtering
- **Authentication**: Login/Register with role-based access
- **Dashboard**: User management and service overview
- **Responsive Design**: Mobile-first approach

## 🗄️ Database Schema

### User Model
```javascript
{
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  address: {
    village: String,
    district: String,
    state: String,
    pincode: String
  },
  role: String (user/provider/admin),
  isActive: Boolean,
  createdAt: Date
}
```

### Service Model
```javascript
{
  title: String,
  description: String,
  category: String,
  provider: ObjectId (User reference),
  price: Number,
  duration: String,
  location: {
    village: String,
    district: String,
    state: String
  },
  images: [String],
  isActive: Boolean,
  createdAt: Date
}
```

## 🎨 Design Features

- **Glass-morphism UI**: Modern translucent design elements
- **Animated Backgrounds**: Gradient animations for visual appeal
- **Floating Navigation**: Elegant fixed navigation bar
- **Responsive Cards**: Service cards with hover effects
- **Material Design**: Following Google's Material Design principles

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create new service (auth required)
- `GET /api/services/:id` - Get service by ID
- `PUT /api/services/:id` - Update service (auth required)
- `DELETE /api/services/:id` - Delete service (auth required)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd frontend
npm run build
```

### Backend Deployment (Heroku/Railway)
Ensure environment variables are set:
- `MONGODB_URI`
- `JWT_SECRET`
- `PORT`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- MongoDB for the robust database solution
- React team for the amazing frontend framework
- Express.js for the lightweight backend framework

## 📞 Contact

codewithshxbh - [chakshubh7@gmail.com](mailto:chakshubh7@gmail.com)

Project Link: [https://github.com/codewithshxbh/VillageConnect](https://github.com/codewithshxbh/VillageConnect)

---

**Built with ❤️ for rural communities**

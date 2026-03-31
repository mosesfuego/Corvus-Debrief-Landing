<div align="center">
  <img src=".github/screenshots/screenshot_hero.png" alt="Corvus MFG Hero" width="100%">
  
  # 🦅 Corvus MFG Landing Page
  
  ### Turn messy production data into clear daily decisions
  
  [![CI/CD Pipeline](https://github.com/mosesfuego/Corvus-Debrief-Landing/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/mosesfuego/Corvus-Debrief-Landing/actions/workflows/ci-cd.yml)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
  [![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
  [![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase)](https://firebase.google.com/)
  
  **AI-powered manufacturing intelligence platform helping operations teams make better decisions, faster.**
  
  [Live Demo](https://ops-dashboard-133.preview.emergentagent.com) · [Admin Dashboard](https://ops-dashboard-133.preview.emergentagent.com/admin) · [Report Bug](https://github.com/mosesfuego/Corvus-Debrief-Landing/issues)
  
</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎯 Landing Page
- **Modern Design**: Clean, YC-style aesthetic with premium feel
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Demo Forms**: Instant lead capture with validation
- **Color-Coded Reports**: Visual status indicators (Blocked, At Risk, Needs Decision)
- **Smooth Animations**: Micro-interactions and hover effects throughout

### 📊 Admin Dashboard
- **Real-time Tracking**: Live view of all demo requests
- **Status Management**: Update request status (Pending → Contacted → Completed)
- **Analytics Overview**: Quick stats on total, pending, contacted, and completed requests
- **Quick Actions**: Email links and delete functionality
- **Responsive Design**: Works on desktop, tablet, and mobile

### 📧 Email Notifications
- **Instant Alerts**: Automatic emails sent to admin on every form submission
- **Beautiful HTML Templates**: Professional, branded email design
- **Complete Details**: Includes name, email, company, timestamp, and request type
- **Powered by Resend**: Fast, reliable email delivery

### 🔥 Firebase Integration
- **Real-time Database**: Firestore for instant data persistence
- **Scalable Storage**: Auto-scaling to handle traffic spikes
- **Secure by Default**: Built-in security rules and authentication support

---

## 📸 Screenshots

<details>
<summary><b>View All Screenshots</b></summary>

### Landing Page - Hero Section
<img src=".github/screenshots/screenshot_hero.png" alt="Hero Section" width="100%">

### Solution Section with Team Photo
<img src=".github/screenshots/screenshot_solution.png" alt="Solution Section" width="100%">

### How It Works - 3-Step Process
<img src=".github/screenshots/screenshot_howitworks.png" alt="How It Works" width="100%">

### Sample Report Display
<img src=".github/screenshots/screenshot_report.png" alt="Sample Report" width="100%">

### Demo Request Modal
<img src=".github/screenshots/screenshot_modal.png" alt="Demo Modal" width="100%">

### Admin Dashboard
<img src=".github/screenshots/screenshot_admin.png" alt="Admin Dashboard" width="100%">

</details>

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Icons**: Lucide React

### Backend
- **Framework**: FastAPI 0.110
- **Database**: Firebase Firestore
- **Email Service**: Resend
- **Authentication**: Firebase Admin SDK
- **Validation**: Pydantic
- **CORS**: Starlette Middleware

### DevOps
- **CI/CD**: GitHub Actions
- **Version Control**: Git
- **Package Management**: Yarn (Frontend), Pip (Backend)
- **Deployment**: Ready for Vercel, AWS, GCP, or any platform

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18+ and **Yarn**
- **Python** 3.11+
- **Firebase** project with Firestore enabled
- **Resend** account for email notifications

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mosesfuego/Corvus-Debrief-Landing.git
cd Corvus-Debrief-Landing
```

#### 2️⃣ Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << EOF
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
RESEND_API_KEY=your_resend_api_key
SENDER_EMAIL=onboarding@resend.dev
ADMIN_EMAIL=your_email@example.com
EOF

# Add Firebase credentials
mkdir -p secrets
# Place your firebase-admin.json in secrets/ directory

# Start backend server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

#### 3️⃣ Frontend Setup

```bash
cd frontend

# Install dependencies
yarn install

# Create .env file
cat > .env << EOF
REACT_APP_BACKEND_URL=http://localhost:8001
EOF

# Start development server
yarn start
```

#### 4️⃣ Access the Application

- **Landing Page**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **API Documentation**: http://localhost:8001/docs
- **Health Check**: http://localhost:8001/api/health

---

## 🔐 Environment Variables

### Backend (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key from Resend for email notifications | ✅ Yes |
| `SENDER_EMAIL` | Email address to send from (default: onboarding@resend.dev) | ✅ Yes |
| `ADMIN_EMAIL` | Email address to receive notifications | ✅ Yes |
| `CORS_ORIGINS` | Allowed CORS origins (use * for development) | ✅ Yes |
| `MONGO_URL` | MongoDB connection string (legacy, not used) | ❌ No |

### Frontend (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_BACKEND_URL` | Backend API URL | ✅ Yes |

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing
3. Enable Firestore Database
4. Generate a service account key:
   - Project Settings → Service Accounts
   - Generate New Private Key
   - Save as `backend/secrets/firebase-admin.json`

### Resend Setup

1. Sign up at [Resend.com](https://resend.com/)
2. Get your API key from the dashboard
3. Add to `backend/.env` as `RESEND_API_KEY`

---

## 📚 API Documentation

### Public Endpoints

#### Submit Demo Request
```http
POST /api/demo-request
Content-Type: application/json

{
  "name": "John Smith",
  "email": "john@company.com",
  "company": "Acme Manufacturing",
  "request_type": "demo"
}
```

**Response**:
```json
{
  "id": "abc123",
  "success": true,
  "message": "Demo request saved successfully"
}
```

#### Health Check
```http
GET /api/health
```

**Response**:
```json
{
  "status": "healthy",
  "firebase": "connected",
  "firestore": "operational"
}
```

### Admin Endpoints

#### List All Requests
```http
GET /api/demo-requests
```

#### Update Request Status
```http
PATCH /api/demo-requests/{request_id}/status?status=contacted
```

#### Delete Request
```http
DELETE /api/demo-requests/{request_id}
```

For full API documentation, visit: `http://localhost:8001/docs`

---

## 🌐 Deployment

### Deploy to Vercel (Frontend)

```bash
cd frontend
vercel --prod
```

Set environment variables in Vercel dashboard:
- `REACT_APP_BACKEND_URL`: Your backend URL

### Deploy Backend (Any Platform)

#### Option 1: Docker

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY backend/ .
RUN pip install -r requirements.txt
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

#### Option 2: Railway, Render, Fly.io

1. Connect your GitHub repository
2. Set environment variables
3. Deploy!

### Required Secrets

Make sure to set these in your deployment platform:
- `RESEND_API_KEY`
- `ADMIN_EMAIL`
- Firebase credentials (as secret file or environment variable)

---

## 📁 Project Structure

```
Corvus-Debrief-Landing/
├── .github/
│   ├── workflows/
│   │   └── ci-cd.yml          # GitHub Actions CI/CD pipeline
│   └── screenshots/           # README screenshots
├── backend/
│   ├── secrets/
│   │   └── firebase-admin.json    # Firebase credentials (gitignored)
│   ├── server.py              # FastAPI main application
│   ├── firebase_config.py     # Firebase setup and helpers
│   ├── email_service.py       # Resend email integration
│   ├── models.py              # Pydantic data models
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # Environment variables (gitignored)
├── frontend/
│   ├── public/
│   │   └── images/            # Corvus logo and team photos
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/            # Shadcn UI components
│   │   │   └── DemoModal.jsx # Demo request modal
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx    # Main landing page
│   │   │   └── AdminDashboard.jsx # Admin panel
│   │   ├── data/
│   │   │   └── mock.js        # Sample report data
│   │   ├── App.js             # Main app component
│   │   └── index.css          # Global styles
│   ├── package.json           # Node dependencies
│   └── .env                   # Frontend env vars (gitignored)
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

---

## 🔒 Security

- **Never commit** `firebase-admin.json` or `.env` files
- Use environment variables for all sensitive data
- Enable Firestore security rules in production
- Add authentication to admin dashboard for production use
- Use HTTPS in production

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Moses Makangila**

- GitHub: [@mosesfuego](https://github.com/mosesfuego)
- Email: mosesmakangila1@gmail.com

---

## 🙏 Acknowledgments

- Built with [Emergent AI](https://emergent.sh)
- UI Components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Email by [Resend](https://resend.com/)

---

<div align="center">
  <p>Made with ❤️ for manufacturing teams everywhere</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

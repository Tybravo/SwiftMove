# SwiftMove Logistics

**SwiftMove Logistics** is a full-stack logistics management platform that empowers businesses with real-time delivery tracking, secure user authentication, role-based dashboards, and a beautiful, responsive admin panel.

GitHub: https://github.com/Tybravo/swiftmove-logistics

---

### Features

- Secure User Registration & Login (JWT + bcrypt)
- Role-Based Access (Admin / User / Driver)
- Responsive Admin Dashboard with collapsible sidebar (icons-only mode)
- Password Strength Meter + Show/Hide Toggle
- Mobile-First Design with smooth AOS animations
- Toast Notifications (react-toastify)
- Conditional Header Buttons (Login/Register visibility)
- Dynamic Browser Tab Titles per route
- MongoDB + Mongoose backend with proper error handling

---

### Tech Stack

#### Frontend (Vite + React + TypeScript)
- React 18 + TypeScript
- Vite (blazing-fast dev server)
- React Router v6
- Tailwind CSS
- React Hook Form + Validation
- Lucide React Icons
- AOS (Animate on Scroll)
- React Toastify

#### Backend (Node.js + Express + TypeScript)
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
- TypeScript for type safety
- dotenv for environment management

---

### Project Structure
```
swiftmove-logistics/
├── client/                  # React + Vite Frontend
│   ├── src/
│   │   ├── pages/           # Home, Login, Register, AdminDashboard
│   │   ├── components/      # Header, Footer, Sidebar, Navbar
│   │   ├── layout/          # PublicLayout, AdminLayout
│   │   └── App.tsx
│   └── vite.config.ts
│
├── server/                  # Express + TypeScript Backend
│   ├── src/
│   │   ├── controllers/     # authController.ts
│   │   ├── models/          # User.ts
│   │   ├── routes/          # auth.ts
│   │   ├── types/           # Custom interfaces
│   │   └── server.ts
│   └── tsconfig.json
│
└── README.md
```
---

### Local Development Setup

#### Prerequisites
- Node.js ≥ 18
- MongoDB (local or Atlas)
- Git

#### 1. Clone & Install
```bash
git clone https://github.com/yourusername/swiftmove-logistics.git
cd swiftmove-logistics
```

#### 2. Backend Setup
```bash
cd server
npm install
```

Create `.env` file:
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/swiftmove?retryWrites=true&w=majority
JWT_SECRET=your_very_strong_secret_key_2025_swiftmove
NODE_ENV=production
```

Start backend:
```bash
npm run dev
# → http://localhost:5000
```

#### 3. Frontend Setup
```bash
cd ../client
npm install
```

Create `.env`:
```env
VITE_API_URL=https://swiftmove-api.onrender.com/api
```

Start frontend:
```bash
npm run dev
# → http://localhost:5173
```

---

### Deployment Instructions

#### Deploy Frontend (Vercel – Recommended)
- Push your code to GitHub
- Go to https://vercel.com
- Click "New Project" → Import your repo
- Framework Preset: Vite
- Root Directory: client  
- Environment Variables:
  - `VITE_API_URL=https://your-backend.onrender.com/api`

Deploy!

Vercel automatically handles builds and gives you a free `.vercel.app` URL.

#### Alternative: Netlify
- Connect GitHub repo on netlify.com
- Build command: `cd client && npm run build`
- Publish directory: `client/dist`
- Add the same `VITE_API_URL` environment variable

---

### Deploy Backend (Render – Free & Easy)
- Go to https://render.com
- New → Web Service
- Connect your GitHub repo → select server folder

Settings:
- Name: `swiftmove-api`
- Region: Frankfurt (or closest)
- Branch: `main`
- Root Directory: `server`
- Build Command: `npm install && npm run build`
- Start Command: `npm start`

Add Environment Variables:
```
MONGO_URI → Your MongoDB Atlas connection string
JWT_SECRET → Strong secret
PORT → 10000
```

Deploy!

Your API will be live at: `https://swiftmove-api.onrender.com`

> ⚠ Render free instances spin down after 15 mins of inactivity. First request may take 10–30 seconds.

---

### Default Test Account

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@swiftmove.com | admin123 |
| User | Register via `/register` |

> Admins must be manually set in MongoDB (`role: "admin"`)

---

### Contributing
We welcome contributions!

```bash
# Fork the repo
git checkout -b feature/new-dashboard
git commit -m "Add new analytics page"
git push origin feature/new-dashboard
```

Open a Pull Request

---

### License
© 2025 SwiftMove Logistics Ltd.  
All rights reserved. This project is proprietary and not open source.

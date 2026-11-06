# 📝 NoteFlow

**NoteFlow** is a full-stack MERN notes application that lets users capture, organize, and manage their ideas with ease. Built with a secure Node.js/Express backend and a modern React frontend, it offers complete note lifecycle management — create, edit, search, pin, soft-delete, restore, and permanently delete notes — all protected by JWT authentication with access and refresh token rotation.

🔗 **Live Frontend:** https://note-flow-eight-inky.vercel.app  
🔗 **Live Backend API:** https://noteflow-x87z.onrender.com/api/v1

---

## 🚀 Features

### 🔐 Authentication
- User registration & login
- JWT Access Token authentication
- JWT Refresh Token rotation for session persistence
- Get current logged-in user
- Secure logout
- Protected routes (authenticated-only)

### 📝 Notes Management
- Create rich-text notes (title, content, category)
- View all active notes
- Get a single note by ID
- Update notes
- Pin / unpin important notes
- Soft delete (move to trash)
- View trashed notes
- Restore trashed notes
- Permanently delete notes
- Search notes by title, content, or category

### 🎨 Frontend UX
- Dark mode support
- Responsive layout (mobile + desktop)
- Sidebar navigation
- Rich-text editor (TinyMCE)
- Debounced search
- Toast notifications (Sonner)
- Profile page with user stats
- Landing page with features & CTA

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Auth** | JWT (access + refresh tokens), bcryptjs |
| **Frontend** | React 19, Vite |
| **Routing** | React Router DOM |
| **State** | React Context API |
| **UI** | Material UI (MUI), Tailwind CSS |
| **Editor** | TinyMCE |
| **Notifications** | Sonner |
| **Deploy (Frontend)** | Vercel |
| **Deploy (Backend)** | Render |

---

## 📂 Project Structure

```text
NoteFlow/
│
├── backend/                  # Node.js + Express API server
│   ├── src/
│   │   ├── config/           # Database connection (db.js)
│   │   ├── controllers/      # Request handlers (auth, note)
│   │   ├── middleware/       # JWT verification, error handling
│   │   ├── models/           # Mongoose schemas (User, Note)
│   │   ├── routes/           # API route definitions
│   │   ├── utils/            # ApiError, ApiResponse, asyncHandler
│   │   ├── server.js         # Express app setup
│   │   └── index.js          # Entry point (connects DB + starts server)
│   ├── .env                  # Backend environment variables (ignored)
│   ├── package.json
│   └── README.md             # Backend-specific documentation
│
├── frontend/                 # React Vite frontend
│   ├── src/
│   │   ├── api/              # API service layer (auth, notes)
│   │   ├── components/       # Reusable UI components (forms, layout, notes, landing)
│   │   ├── context/          # AuthContext, NotesContext
│   │   ├── hooks/            # Custom hooks (useDebounce)
│   │   ├── pages/            # Page components (Dashboard, Login, Profile, etc.)
│   │   ├── routes/           # AppRoutes, ProtectedRoutes, PublicRoutes
│   │   ├── theme/            # MUI theme + ThemeProvider
│   │   ├── utils/            # Token storage, validators, loading dots
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   ├── dist/
│   ├── .env                  # Frontend environment variables (ignored)
│   ├── vercel.json           # Vercel deployment config
│   ├── vite.config.js
│   ├── package.json
│   └── README.md             # Frontend-specific documentation
│
├── .gitignore                # Root gitignore
├── README.md                 # This file (project overview)
└── NoteFlow_PRD.pdf          # Product requirements document
```

---

## 🔌 API Reference

Base URL: `https://noteflow-x87z.onrender.com/api/v1`

All note routes require a valid `Authorization: Bearer <access_token>` header.

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Register a new user | No |
| `POST` | `/auth/login` | Login user | No |
| `POST` | `/auth/logout` | Logout user | Yes |
| `POST` | `/auth/refresh-token` | Generate new access token | No |
| `GET` | `/auth/me` | Get logged-in user | Yes |

### Notes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/notes` | Create a note | Yes |
| `GET` | `/notes` | Get all active notes | Yes |
| `GET` | `/notes/search?q=keyword` | Search notes | Yes |
| `GET` | `/notes/trash` | Get trashed notes | Yes |
| `GET` | `/notes/:noteId` | Get note by ID | Yes |
| `PUT` | `/notes/:noteId` | Update a note | Yes |
| `DELETE` | `/notes/:noteId` | Soft delete (move to trash) | Yes |
| `PATCH` | `/notes/:noteId/restore` | Restore a trashed note | Yes |
| `DELETE` | `/notes/:noteId/delete` | Permanently delete a note | Yes |
| `PATCH` | `/notes/:noteId/pin` | Pin / unpin a note | Yes |

### Response Formats

**Success**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Success",
  "data": {}
}
```

**Error**
```json
{
  "success": false,
  "message": "Error Message",
  "errors": []
}
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB database (local or MongoDB Atlas)

### 1. Clone the repository
```bash
git clone <repository-url>
cd NoteFlow
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_ACCESS_TOKEN_SECRET=your_access_token_secret
JWT_ACCESS_EXPIRES_IN=5m
JWT_REFRESH_TOKEN_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRES_IN=1d
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

Start the backend:
```bash
npm run dev   # development (nodemon)
npm start     # production
```

Server runs at `http://localhost:5000`.

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:
```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api/v1
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

Start the frontend:
```bash
npm run dev   # development (Vite)
npm run build # production build
npm run preview
```

Frontend runs at `http://localhost:5173` by default.

---

## 🌐 Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com) — https://note-flow-eight-inky.vercel.app
- **Backend:** Deployed on [Render](https://render.com) — https://noteflow-x87z.onrender.com

To redeploy, push changes to the connected repository branch. Make sure environment variables are configured on both platforms.

---

## 🔒 Security Features

- Passwords hashed with **bcryptjs** before storage
- **JWT** access tokens (short-lived) + refresh tokens (long-lived)
- Refresh token rotation on every refresh
- Protected routes via JWT middleware
- User-scoped authorization (users can only access their own notes)
- Soft delete architecture (trashed notes recoverable, not immediately lost)
- Centralized error handling & async error wrapper
- ObjectId validation on all note routes

---

## 📖 API Response / Error Handling

The backend uses consistent response wrappers:
- `ApiResponse` — standard success response with `success`, `statusCode`, `message`, `data`
- `ApiError` — standardized error with `statusCode`, `message`, `errors`
- `asyncHandler` — wraps route handlers to catch async errors and forward to the error middleware

---

## 👨‍💻 Author

**Naga Venkata Mahidhar Babu Boppana**  
Full Stack Developer | MERN Stack Developer

---

## 📄 License

This project is licensed under the **MIT License**.

---
# 📝 NoteFlow

NoteFlow is a full-stack MERN note-taking application that helps users securely create, organize, and manage their notes. It features JWT authentication, a rich text editor powered by TinyMCE, note pinning, search, trash management, and a modern responsive interface.

---

## ✨ Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- User Profile
- Logout

### Notes Management
- Create Notes
- Update Notes
- Delete Notes (Move to Trash)
- Restore Notes
- Permanently Delete Notes
- Pin & Unpin Notes
- Search Notes
- Rich Text Editor (TinyMCE)

### User Experience
- Responsive Design
- Loading States
- Toast Notifications
- Clean & Modern UI

---

# 🛠 Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios
- TinyMCE
- Sonner

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Cookie Parser
- CORS

---

# 📂 Project Structure

```
NoteFlow/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/your-username/NoteFlow.git
cd NoteFlow
```

---

# ⚙ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file.

```env
PORT=5000

MONGODB_URI=

ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=

REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

CORS_ORIGIN=http://localhost:5173
```

Start the backend

```bash
npm run dev
```

---

# ⚙ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file.

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_TINYMCE_API_KEY=your_api_key
```

Start the frontend

```bash
npm run dev
```

---

# 🌐 Live Demo

Frontend

```
https://your-frontend-url.vercel.app
```

Backend API

```
https://your-backend-url.onrender.com
```

---

# 📸 Screenshots

Add screenshots here.

Example:

- Landing Page
- Login
- Dashboard
- Notes Editor
- Trash Page

---

# 📌 Future Improvements

- Categories & Tags
- Dark/Light Theme
- Archive Notes
- File Attachments
- Note Sharing
- Markdown Support

---

# 👨‍💻 Author

**Naga Venkata Mahidhar Babu Boppana**

GitHub: https://github.com/MahidharBoppana

LinkedIn: https://www.linkedin.com/in/your-linkedin-profile/

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

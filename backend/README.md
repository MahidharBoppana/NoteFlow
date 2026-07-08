# NoteFlow Backend

A professional, secure, and scalable REST API for the **NoteFlow** application built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. It provides user authentication, authorization, and complete note management with features like soft delete, restore, pin/unpin, search, and refresh token authentication.

---

# 🚀 Features

## Authentication

* User Registration
* User Login
* JWT Access Token Authentication
* Refresh Token Authentication
* Get Logged-in User
* Logout User
* Protected Routes using JWT Middleware

---

## Notes Management

* Create Note
* Get All Notes
* Get Note by ID
* Update Note
* Soft Delete (Move to Trash)
* View Trashed Notes
* Restore Note
* Permanently Delete Note
* Pin / Unpin Notes
* Search Notes by Title, Content, or Category

---

# 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* CORS

---

# 📂 Project Structure

```text
backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── note.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── models/
│   │   ├── User.model.js
│   │   └── Note.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── note.routes.js
│   │
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   └── asyncHandler.js
│   │
│   ├── server.js
│   └── index.js
│
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project directory

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file and add the following variables:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

FRONTEND_URL=http://localhost:5173

JWT_ACCESS_TOKEN_SECRET=your_access_secret
JWT_REFRESH_TOKEN_SECRET=your_refresh_secret

JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

Start the development server

```bash
npm run dev
```

Server will run at

```text
http://localhost:5000
```

---

# 🔐 Authentication Endpoints

| Method | Endpoint                     | Description               |
| ------ | ---------------------------- | ------------------------- |
| POST   | `/api/v1/auth/register`      | Register a new user       |
| POST   | `/api/v1/auth/login`         | Login user                |
| POST   | `/api/v1/auth/logout`        | Logout user               |
| POST   | `/api/v1/auth/refresh-token` | Generate new access token |
| GET    | `/api/v1/auth/me`            | Get logged-in user        |

---

# 📝 Notes Endpoints

| Method | Endpoint                          | Description             |
| ------ | --------------------------------- | ----------------------- |
| POST   | `/api/v1/notes`                   | Create Note             |
| GET    | `/api/v1/notes`                   | Get All Notes           |
| GET    | `/api/v1/notes/search?q=keyword`  | Search Notes            |
| GET    | `/api/v1/notes/trash`             | Get Trashed Notes       |
| GET    | `/api/v1/notes/:noteId`           | Get Note by ID          |
| PUT    | `/api/v1/notes/:noteId`           | Update Note             |
| DELETE | `/api/v1/notes/:noteId`           | Move Note to Trash      |
| PATCH  | `/api/v1/notes/:noteId/restore`   | Restore Note            |
| DELETE | `/api/v1/notes/:noteId/permanent` | Permanently Delete Note |
| PATCH  | `/api/v1/notes/:noteId/pin`       | Pin / Unpin Note        |

---

# 🔒 Security Features

* Password hashing using **bcryptjs**
* JWT Authentication
* Refresh Token Authentication
* Protected Routes
* User-specific Authorization
* Soft Delete Implementation
* ObjectId Validation
* Centralized Error Handling
* Async Error Wrapper

---

# 📌 API Response Format

### Success Response

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Success",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error Message",
  "errors": []
}
```

---

# 📖 Future Improvements

* HTTP-only Cookie Authentication
* Rate Limiting
* Request Validation (Zod/Joi)
* Pagination
* Sorting & Filtering
* File Attachments
* Docker Support
* Unit & Integration Testing
* API Documentation (Swagger)

---

# 👨‍💻 Author

**Naga Venkata Mahidhar Babu Boppana**

Full Stack Developer | MERN Stack Developer

---

# 📄 License

This project is licensed under the **MIT License**.

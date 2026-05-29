# NoteFlow Frontend

A modern rich-text notes application built using React, Material UI, Tailwind CSS, and TinyMCE.
NoteFlow helps users create, organize, search, pin, categorize, and manage notes with a clean and responsive UI.

---

# Features

## Authentication UI

* Login page
* Signup page
* Protected routes
* Authentication context

## Notes Management

* Create notes
* Edit notes
* Delete notes
* Restore deleted notes
* Permanently delete notes
* Rich text editing with TinyMCE

## Productivity Features

* Pin important notes
* Categories system
* Search notes
* Debounced search optimization
* Trash system

## UI & UX

* Dark mode support
* Responsive layout
* Sidebar navigation
* Modal-based editor
* Toast notifications
* Profile page

---

# Tech Stack

## Frontend

* React
* React Router DOM
* Context API
* Material UI (MUI)
* Tailwind CSS
* TinyMCE Editor

---

# Folder Structure

```bash
src/
│
├── components/
│   ├── forms/
│   ├── layout/
│   └── notes/
│
├── context/
│
├── hooks/
│
├── pages/
│
├── routes/
│
├── theme/
│
└── main.jsx
```

---

# Installation

## Clone Repository

```bash
git clone <your-repo-url>
```

## Navigate to Project

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# Environment Variables

Create a `.env` file in the frontend root:

```env
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

---

# Major Concepts Implemented

* Context API State Management
* Protected Routing
* Rich Text Editor Integration
* Debouncing with Custom Hooks
* Soft Delete Architecture
* Global Theme System
* Responsive Design
* Reusable Component Architecture

---

# Upcoming Backend Integration

The backend will be built using:

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

---

# Author

Mahidhar Boppana.

# Vinayak Jewellers Deployment Guide

## Project Overview

Vinayak Jewellers is a full-stack jewellery management system developed using the MERN stack. The project includes a React-based Admin Panel, a Node.js & Express.js backend, MongoDB database integration, secure JWT authentication, and image upload functionality.

---

# System Architecture

```text
                Admin User
                     │
                     ▼
         React Admin Panel (Frontend)
                     │
                     ▼
        Node.js + Express.js (Backend)
                     │
                     ▼
              MongoDB Atlas Database
```

---

# Backend Deployment

## Prerequisites

* Node.js (v18 or later recommended)
* MongoDB Atlas account
* Git
* npm

---

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/vinayak-jewellers-admin.git

cd vinayak-jewellers-admin
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
PORT=3002

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Run Backend

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The backend will run on:

```text
http://localhost:3002
```

---

# Frontend Deployment

Navigate to the admin panel.

```bash
cd admin-panel
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create an `.env` file inside the `admin-panel` folder.

```env
VITE_API_URL=http://localhost:3002/api
```

For production:

```env
VITE_API_URL=https://your-backend-domain.com/api
```

---

## Run Frontend

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## Build Frontend

```bash
npm run build
```

The generated `dist` folder can be deployed to:

* Vercel
* Netlify
* Cloudflare Pages

---

# Database Deployment

Database used:

* MongoDB Atlas

Configuration Steps:

1. Create a MongoDB Atlas Cluster.
2. Create a Database User.
3. Configure Network Access.
4. Copy the MongoDB connection string.
5. Add the connection string to the backend `.env` file.

Collections:

* Admin
* Category
* SubCategory
* Product

---

# Image Upload Configuration

Image uploads are handled using **Multer**.

Uploaded files are stored in:

```text
/uploads
```

Images are served using:

```text
http://localhost:3002/uploads/<image-name>
```

---

# Security Features

Implemented security features include:

* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* Role-Based Access Control (RBAC)
* Request Validation
* CORS Configuration
* Secure Environment Variables

---

# Recommended Production Deployment

```text
Developer
     │
     ▼
GitHub Repository
     │
     ▼
Backend Hosting
(Render / Railway)
     │
     ▼
Frontend Hosting
(Vercel / Netlify)
     │
     ▼
MongoDB Atlas
```

---

# Deployment Checklist

* Install project dependencies
* Configure environment variables
* Connect MongoDB Atlas
* Start backend server
* Start frontend application
* Verify API connectivity
* Verify image uploads
* Test Admin Login
* Test Category CRUD
* Test SubCategory CRUD
* Test Product CRUD

---

# Maintenance

Recommended best practices:

* Perform regular database backups.
* Protect environment variables.
* Monitor application logs.
* Keep dependencies updated.
* Optimize images before uploading.
* Review security settings periodically.

---

# Technologies Used

## Frontend

* React.js
* Vite
* Axios
* React Router DOM
* React Toastify

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Multer
* Slugify

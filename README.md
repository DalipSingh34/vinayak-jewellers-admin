# Vinayak Jewellers Backend Management System

## Project Overview

This project is a complete backend management system developed for the Vinayak Jewellers website using the MERN stack.

The system follows the MVC (Model-View-Controller) architecture and provides a secure admin panel for managing categories, sub-categories, and products.

---

## Features

### Authentication

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Role-Based Access Control (RBAC)

---

### Category Management

- Create Category
- View Categories
- Update Category
- Delete Category
- Image Upload

---

### SubCategory Management

- Create SubCategory
- View SubCategories
- Update SubCategory
- Delete SubCategory
- Category Relationship
- Image Upload

---

### Product Management

- Create Product
- View Products
- Update Product
- Delete Product
- Multiple Image Upload
- SEO Friendly Slug
- Category Relationship
- SubCategory Relationship

---

## Technology Stack

### Frontend

- React.js
- Vite
- Axios
- React Router
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- Slugify

---

## Project Structure

```
vinayak-backend

├── admin-panel
├── controllers
├── models
├── routes
├── middleware
├── config
├── uploads
├── documentation
├── app.js
├── server.js
```

---

## API

Authentication

```
POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile
```

Categories

```
GET /api/categories

POST /api/categories

PUT /api/categories/:id

DELETE /api/categories/:id
```

SubCategories

```
GET /api/subcategories

POST /api/subcategories

PUT /api/subcategories/:id

DELETE /api/subcategories/:id
```

Products

```
GET /api/products

GET /api/products/:id

GET /api/products/slug/:slug

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id
```

---

## Environment Variables

```
PORT=

MONGO_URI=

JWT_SECRET=
```

---

## Documentation

The project includes:

- ER Diagram
- API Documentation
- Deployment Documentation
- Cloudflare Configuration

---

## Developed By

Dalip Singh
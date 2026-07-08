# Vinayak Jewellers API Documentation

## Base URL

```
http://localhost:3002/api
```

---

# Authentication APIs

## 1. Register Admin

**Endpoint**

```
POST /auth/register
```

### Request Body

```json
{
  "name": "Admin",
  "email": "admin@gmail.com",
  "password": "123456"
}
```

### Success Response (201 Created)

```json
{
  "success": true,
  "message": "User registered successfully. Please login.",
  "user": {
    "id": "ADMIN_ID",
    "name": "Admin",
    "email": "admin@gmail.com",
    "role": "admin"
  }
}
```

---

## 2. Login Admin

**Endpoint**

```
POST /auth/login
```

### Request Body

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

### Success Response (200 OK)

```json
{
  "success": true,
  "token": "JWT_TOKEN",
  "user": {
    "id": "ADMIN_ID",
    "name": "Admin",
    "email": "admin@gmail.com",
    "role": "admin"
  }
}
```

---

## 3. Get Admin Profile

**Endpoint**

```
GET /auth/profile
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

### Success Response (200 OK)

```json
{
  "success": true,
  "user": {
    "id": "ADMIN_ID",
    "name": "Admin",
    "email": "admin@gmail.com",
    "role": "admin"
  }
}
```

---

# Category APIs

## 1. Create Category

**Endpoint**

```
POST /categories
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

### Body (Form Data)

| Field       | Type |
| ----------- | ---- |
| name        | Text |
| description | Text |
| image       | File |

### Success Response

```json
{
  "success": true,
  "message": "Category created successfully"
}
```

---

## 2. Get All Categories

**Endpoint**

```
GET /categories
```

### Success Response

```json
{
  "success": true,
  "count": 5,
  "categories": []
}
```

---

## 3. Get Category By ID

**Endpoint**

```
GET /categories/:id
```

---

## 4. Update Category

**Endpoint**

```
PUT /categories/:id
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

### Body

Form Data

* name
* description
* image

---

## 5. Delete Category

**Endpoint**

```
DELETE /categories/:id
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

---

# SubCategory APIs

## 1. Create SubCategory

**Endpoint**

```
POST /subcategories
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

### Body (Form Data)

| Field       | Type     |
| ----------- | -------- |
| name        | Text     |
| description | Text     |
| category    | ObjectId |
| image       | File     |

---

## 2. Get All SubCategories

**Endpoint**

```
GET /subcategories
```

### Success Response

```json
{
  "success": true,
  "count": 10,
  "subCategories": []
}
```

---

## 3. Get SubCategory By ID

**Endpoint**

```
GET /subcategories/:id
```

---

## 4. Update SubCategory

**Endpoint**

```
PUT /subcategories/:id
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 5. Delete SubCategory

**Endpoint**

```
DELETE /subcategories/:id
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

---

# Product APIs

## 1. Create Product

**Endpoint**

```
POST /products
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

### Body (Form Data)

| Field          | Type           |
| -------------- | -------------- |
| category       | ObjectId       |
| subCategory    | ObjectId       |
| name           | Text           |
| description    | Text           |
| price          | Number         |
| weight         | Text           |
| material       | Text           |
| purity         | Text           |
| stock          | Number         |
| featured       | Boolean        |
| status         | Boolean        |
| seoTitle       | Text           |
| seoDescription | Text           |
| images         | Multiple Files |

---

## 2. Get All Products

**Endpoint**

```
GET /products
```

### Success Response

```json
{
  "success": true,
  "count": 20,
  "products": []
}
```

---

## 3. Get Product By ID

**Endpoint**

```
GET /products/:id
```

---

## 4. Get Product By SEO Slug

**Endpoint**

```
GET /products/slug/:slug
```

### Example

```
GET /products/slug/gold-diamond-ring
```

---

## 5. Update Product

**Endpoint**

```
PUT /products/:id
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

### Body

Form Data (same as Create Product)

---

## 6. Delete Product

**Endpoint**

```
DELETE /products/:id
```

### Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

---

# Authentication

All protected APIs require the following header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# Database Relationships

```
Category (1)
      │
      └──────────► SubCategory (Many)
                         │
                         └──────────► Product (Many)
```

---

# Technology Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt Password Hashing
* Multer (Image Upload)
* Slugify

## Frontend

* React.js
* Vite
* Axios
* React Router DOM
* React Toastify

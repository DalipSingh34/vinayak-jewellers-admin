# Vinayak Jewellers API Documentation


Base URL: http://localhost:3002/api



---

# Authentication APIs


## Register Admin

### POST

/auth/register


### Request Body

```json
{
    "name":"Admin",
    "email":"admin@gmail.com",
    "password":"123456"
}
Response
{
    "success":true,
    "message":"User registered successfully"
}
Login Admin
POST
/auth/login
Request Body
{
    "email":"admin@gmail.com",
    "password":"123456"
}
Response
{
    "success":true,
    "token":"JWT_TOKEN",
    "user":{
        "name":"Admin",
        "email":"admin@gmail.com",
        "role":"admin"
    }
}
Category APIs
Create Category
POST
/categories

Authorization:

Bearer Token

Body:

Form Data

name
description
image
Get All Categories
GET
/categories
Get Single Category
GET
/categories/:id
Update Category
PUT
/categories/:id

Authorization:

Bearer Token
Delete Category
DELETE
/categories/:id

Authorization:

Bearer Token
SubCategory APIs
Create SubCategory
POST
/subcategories

Authorization:

Bearer Token

Body:

Form Data

name
description
category
image
Get All SubCategories
GET
/subcategories
Get Single SubCategory
GET
/subcategories/:id
Update SubCategory
PUT
/subcategories/:id

Authorization:

Bearer Token
Delete SubCategory
DELETE
/subcategories/:id

Authorization:

Bearer Token
Product APIs
Create Product
POST
/products

Authorization:

Bearer Token

Body:

Form Data

category

subCategory

name

description

price

weight

material

purity

stock

featured

status

seoTitle

seoDescription

images[]
Get All Products
GET
/products
Get Product By ID
GET
/products/:id
Get Product By SEO Slug
GET
/products/slug/:slug

Example:

/products/slug/gold-diamond-ring
Update Product
PUT
/products/:id

Authorization:

Bearer Token
Delete Product
DELETE
/products/:id

Authorization:

Bearer Token
Authentication Header

Protected APIs require:

Authorization: Bearer JWT_TOKEN
Database Relationships
Category
    |
    |
    |---- SubCategory
              |
              |
              |---- Product
Technologies Used

Backend:

Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt Password Encryption
Multer Image Upload

Frontend:

React.js
Vite
Axios



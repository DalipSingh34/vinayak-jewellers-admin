# Vinayak Jewellers Deployment Documentation


## Project Overview

Vinayak Jewellers is a full-stack jewellery management system with:

- React.js Admin Panel
- Node.js + Express.js Backend
- MongoDB Database
- JWT Authentication
- Image Upload Management


---

# System Architecture

             Admin User

                |
                |

          React Admin Panel
             (Frontend)

                |

                |

          Node.js API Server
             (Backend)

                |

                |

          MongoDB Database

          

---

# Backend Deployment


## Requirements

- Node.js
- MongoDB Atlas Account
- Environment Variables


## Install Dependencies


```bash
npm install

Environment Variables

Create .env file:

PORT=3002

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Run Backend Locally

Development:

npm run dev

Production:

npm start
Frontend Deployment
Install Dependencies
npm install
Environment Configuration

Create:

.env

Add:

VITE_API_URL=backend_api_url

Example:

VITE_API_URL=https://your-backend-domain.com/api
Build Frontend
npm run build

The generated build files can be deployed on:

Vercel
Netlify
Cloudflare Pages
Database Deployment

Database:

MongoDB Atlas

Configuration:

Create MongoDB cluster
Create database user
Configure network access
Add connection string in backend environment variables

Collections:

Admin

Category

SubCategory

Product
Image Storage

Product and category images are handled using:

Multer middleware
Upload directory

Images are served through:

/uploads
Security Configuration

Implemented security features:

Authentication
JWT based authentication
Password Security
bcrypt password hashing
Authorization
Protected admin routes
API Security
CORS configuration
Request validation
Production Deployment Flow
Developer

   |

GitHub Repository

   |

Backend Hosting
(Render/Railway)

   |

Frontend Hosting
(Vercel)

   |

MongoDB Atlas

Maintenance

Recommended practices:

Regular database backup
Environment variable protection
Monitor server logs
Update dependencies regularly
Optimize images before upload
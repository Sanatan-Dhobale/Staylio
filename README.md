# 🏡 Staylio – Airbnb Clone

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)
![Bootstrap](https://img.shields.io/badge/Bootstrap-Frontend-purple?style=for-the-badge&logo=bootstrap)
![EJS](https://img.shields.io/badge/EJS-Templating-orange?style=for-the-badge)

### A Full-Stack Airbnb-Inspired Property Rental Platform

Discover, create, manage, and review unique stays from around the world.

Live Demo: https://staylio-33hd.onrender.com/

</div>

---

## 🚀 Project Overview

**Staylio** is a full-stack web application inspired by Airbnb that allows users to explore property listings, create their own stays, upload images, leave reviews, and manage bookings-like experiences.

The project focuses on building a production-style MVC architecture while implementing authentication, authorization, image management, geolocation, reviews, and responsive UI design.

This project was developed to strengthen full-stack development skills using modern web technologies and industry-standard backend practices.

---

## ✨ Key Features

### 🔐 Authentication & Authorization

- User Registration and Login
- Secure Password Hashing using Passport Authentication
- Session-based Authentication
- Protected Routes
- Authorization Middleware
- Only owners can edit or delete their listings

---

### 🏠 Listing Management

- Create New Property Listings
- Edit Existing Listings
- Delete Listings
- View Detailed Listing Information
- Upload Listing Images
- Store Image URLs and Metadata
- Responsive Property Cards

---

### 📍 Location & Maps Integration

- Location-based Listings
- Automatic Geocoding of User Entered Locations
- Interactive Maps using Leaflet
- OpenStreetMap Integration
- Display Property Coordinates on Map

---

### ⭐ Reviews & Ratings

- Add Reviews
- Star Rating System
- Delete Reviews
- One-to-Many Relationship between Listings and Reviews
- Review Validation

---

### 👤 User Ownership

- Listing Owner Information
- User-specific Permissions
- Secure Resource Access
- Ownership Verification before Updates

---

### 🎨 Responsive UI/UX

- Mobile-Friendly Design
- Bootstrap Components
- Interactive Navigation
- Clean Airbnb-inspired Interface
- Flash Messages for User Feedback

---

### 🛡️ Security Features

- Data Validation using Joi
- MongoDB Injection Protection
- Express Error Handling
- Authentication Middleware
- Route Protection
- Server-side Validation

---

## 🏗️ Tech Stack

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS Templates

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose ODM

### Authentication

- Passport.js
- Passport Local Strategy
- Express Session

### Maps & Location

- Leaflet.js
- OpenStreetMap
- Geocoding API

### Image Handling

- Cloudinary
- Multer
- Multer Storage Cloudinary

### Validation

- Joi

### Other Tools

- Connect Flash
- Method Override
- Express Error Handling Middleware

---

## 📂 Project Structure

```bash
Staylio/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── listings/
│   ├── users/
│   ├── layouts/
│   └── includes/
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── utils/
├── middleware.js
├── cloudConfig.js
├── app.js
└── package.json

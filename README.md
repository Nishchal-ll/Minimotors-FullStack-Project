# 🏎️ MiniMotors — Hot Wheels E-Commerce Platform

**MiniMotors** is a full-stack **e-commerce web application** built with **React (Frontend)** and **Laravel (Backend API)**.  
It’s designed for Hot Wheels collectors to browse, order, review, and track their favorite collectibles.  
Admins can manage products, orders, and delivery status from a clean, intuitive dashboard.

---

## 🚀 Features

### 🧾 User Features
- 🛒 **User Registration & Login** (Email-based authentication)
- 🔍 **Browse Products** by category or search
- 🧺 **Add to Cart** and manage cart items
- 💳 **Checkout via Stripe & Khalti** (Test Mode supported)
- ⭐ **User Review System** — rate and leave reviews on purchased products
- 📦 **Order Tracking** — view order status (*Pending*, *Processed*, *Delivered*, *Refunded*)
- 📨 **Order Confirmation Email** after successful purchase
- 👤 **Personal Dashboard** — view past orders and product reviews
- 🔒 **Secure Checkout** — SSL encryption for all payments

---

### 🧰 Admin Features
- 🔐 **Secure Admin Login Panel**
- 🧮 **View & Manage All Orders**
- ⚙️ **Update Order Status** (*Pending → Processed → Delivered / Refunded*)
- 🧾 **View User Info & Purchase Details**
- 🧱 **Add / Edit / Delete Products**
- ⭐ **View Product Reviews** submitted by users
- 📊 **View Product List and Total Orders**
- 📝 **Manage Categories** (optional, for better product organization)

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React, React Router, Axios, Tailwind CSS |
| **Backend** | Laravel 10 (RESTful API) |
| **Database** | MySQL |
| **Payment Gateway** | Stripe (Test Mode), Khalti |
| **Authentication** | Email Login (LocalStorage based) |
| **Mail System** | Laravel Mail (SMTP) |
| **Image Storage** | Laravel File Storage (Public Disk) |
| **Reviews & Ratings** | Custom Laravel API + React UI |

---

## 📦 Installation & Setup

1. **Backend (Laravel)**  

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

2. **Frontend (React)**  

```bash
npm install
npm run dev


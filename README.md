🚗 RentCar — Car Rental Management System

RentCar is a full-stack web application designed for car rental businesses.
It provides a seamless experience for customers to browse, book, and manage car rentals online, while giving administrators full control over the car fleet, bookings, and users.

📖 Overview

Frontend: ReactJS (SPA) + Bootstrap

Backend: Spring Boot (Java)

Database: MySQL

Authentication: JSON Web Tokens (JWT)

User Roles: User and Admin

🧩 Features
🔹 Anonymous Users

View available cars and details

Register and create an account

🔹 Registered Users

Login / Logout

Search and view car details

Reserve cars for specific dates

View and manage past bookings

Check car availability by date

🔹 Admins

Add, update, or delete cars

Approve or reject rental requests

Manage all active rentals

View users, sales, and overall activity

⚙️ Technologies & Versions
Layer	Technology	Version
Backend	Java (Spring Boot)	17+, 2.7.x
Frontend	ReactJS + Bootstrap	18+, 5.x
Database	MySQL	8+
Build Tool	Maven	3.x
🧰 Backend Dependencies

spring-boot-starter-web

spring-boot-starter-data-jpa

spring-boot-starter-security

jjwt (JWT authentication)

mysql-connector-java

🎨 Frontend Dependencies

react, react-router-dom

axios

toastr (notifications)

lucide-react (icons)

📁 Project Structure
car-rental-system/
│
├── frontend-react/              # React frontend
│   ├── src/components/          # Reusable UI components
│   ├── src/pages/               # Page views
│   ├── src/context/             # Context API (User, Dates)
│   ├── src/services/            # Axios API calls
│   └── src/util/                # Helper functions
│
└── server/                      # Spring Boot backend
    ├── controller/              # REST endpoints
    ├── service/                 # Business logic
    ├── repository/              # JPA repositories
    ├── model/                   # Entities (User, Car, Rent, Sale)
    └── resources/               # application.properties

⚙️ How It Works

User registration/login: User credentials are validated, and a JWT token is generated.

Browsing cars: All available cars are fetched via REST API.

Booking: A booking record is created and stored in the MySQL database.

Approval: Admin reviews and approves the booking request.

Security: JWT ensures role-based authentication for all endpoints.

🧠 Highlights

Clean separation of frontend, backend, and database layers

Pagination for car listings (5 per page)

Search cars by brand, model, or availability date

Price calculation based on duration and penalties for late returns

Secure REST APIs with JWT authentication

🧾 Running the Project Locally
🖥️ Prerequisites

Node.js (v16+)

Java JDK 17+

Maven 3+

MySQL Server

🔹 1. Clone the Repository
git clone https://github.com/Ankeshamar/car-rental-system.git
cd car-rental-system

🔹 2. Setup Database
CREATE DATABASE car_rental;
USE car_rental;
SOURCE database_mysql/car_rental.sql;

🔹 3. Run Backend
cd server
mvn spring-boot:run


Spring Boot runs by default at:

http://localhost:8080

🔹 4. Run Frontend
cd frontend-react
npm install
npm start


Frontend runs at:

http://localhost:3000

🔗 API Overview (Examples)
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Authenticate user & get JWT
GET	/api/cars	Fetch all cars
POST	/api/rents	Reserve a car
GET	/api/admin/rents	Get all rentals (Admin only)
🧮 Future Enhancements

Online payment integration (Razorpay / Stripe)

Email and SMS notifications

Enhanced admin analytics dashboard

Cloud deployment (Vercel + Render + Railway)

👨‍💻 Author

Ankesh Amar
📧 [ankeshamar8@gmail.com
]

If you like this project, ⭐ star it on GitHub — it helps others discover it!

🪪 License

This project is licensed under the MIT License — free for personal and educational use.

🏁 Summary

“RentCar” is a complete full-stack solution for managing car rentals — from browsing cars to approving bookings — built with modern web technologies: React, Spring Boot, and MySQL.
Perfect for academic submission, demonstration, or as a base for a production-ready rental system.

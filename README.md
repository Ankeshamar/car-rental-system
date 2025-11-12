# 🚗 **RentCar — Car Rental Management System**

**RentCar** is a **full-stack web application** designed for car rental businesses.  
It provides a seamless experience for customers to browse, book, and manage car rentals online, while giving administrators full control over the car fleet, bookings, and users.

---

## 📖 **Overview**

- **Frontend:** ReactJS (SPA) + Bootstrap  
- **Backend:** Spring Boot (Java)  
- **Database:** MySQL  
- **Authentication:** JSON Web Tokens (JWT)  
- **User Roles:** `User` and `Admin`

---

## 🧩 **Features**

### 🔹 **Anonymous Users**
- View available cars and details  
- Register and create an account  

### 🔹 **Registered Users**
- Login / Logout  
- Search and view car details  
- Reserve cars for specific dates  
- View and manage past bookings  
- Check car availability by date  

### 🔹 **Admins**
- Add, update, or delete cars  
- Approve or reject rental requests  
- Manage all active rentals  
- View users, sales, and overall activity  

---

## ⚙️ **Technologies & Versions**

| Layer | Technology | Version |
|--------|-------------|----------|
| **Backend** | Java (Spring Boot) | 17+, 2.7.x |
| **Frontend** | ReactJS + Bootstrap | 18+, 5.x |
| **Database** | MySQL | 8+ |
| **Build Tool** | Maven | 3.x |

---

### 🧰 **Backend Dependencies**
- `spring-boot-starter-web`  
- `spring-boot-starter-data-jpa`  
- `spring-boot-starter-security`  
- `jjwt` *(JWT authentication)*  
- `mysql-connector-java`

### 🎨 **Frontend Dependencies**
- `react`, `react-router-dom`  
- `axios`  
- `toastr` *(notifications)*  
- `lucide-react` *(icons)*  

---

## 📁 **Project Structure**
<img width="525" height="529" alt="image" src="https://github.com/user-attachments/assets/b5ccb24e-f5a2-4d3c-b880-2c12ff4a5539" />

---

## ⚙️ **How It Works**

1. **User registration/login:** User credentials are validated, and a JWT token is generated.  
2. **Browsing cars:** All available cars are fetched via REST API.  
3. **Booking:** A booking record is created and stored in the MySQL database.  
4. **Approval:** Admin reviews and approves the booking request.  
5. **Security:** JWT ensures role-based authentication for all endpoints.

---

## 🧠 **Highlights**
- Clean separation of frontend, backend, and database layers  
- Pagination for car listings (5 per page)  
- Search cars by brand, model, or availability date  
- Price calculation based on duration and penalties for late returns  
- Secure REST APIs with JWT authentication  

---

## 🧾 **Running the Project Locally**

### 🖥️ **Prerequisites**
- Node.js (v16+)  
- Java JDK 17+  
- Maven 3+  
- MySQL Server  

---

### 🔹 **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Ankeshamar/car-rental-system.git
cd car-rental-system

```

### 🔹 **2️⃣ Setup Databasey**
```bash
CREATE DATABASE car_rental;
USE car_rental;
SOURCE database_mysql/car_rental.sql;

```

### 🔹 **3️⃣ Run Backend**
```bash
cd server
mvn spring-boot:run

```

Backend runs at:
👉 http://localhost:8080

### 🔹 **4️⃣ Run Frontend**
```bash
cd frontend-react
npm install
npm start

```

Frontend runs at:
👉 http://localhost:3000

---

## 👨‍💻 **Author**
Ankesh Amar
📧 ankeshamar8@gmail.com

⭐ If you like this project, give it a star on GitHub — it helps others discover it!


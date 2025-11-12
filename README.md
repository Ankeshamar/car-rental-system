# RentCar #
“RentCar” is a web application for a car rental buisnesses. The client side is a single page app built with ReactJS and Bootstrap. The server side is built on Spring Boot using Java. The application uses MySQL database to store data. Security is provided by using JSON web tokens. The application uses Users, Rents, Sales and Cars as basic entities. Each user can register, login and logout. The application supports two user roles - User and Admin.

# Car Rental System – Project Explanation

**GitHub Repo:** [https://github.com/Aniket-Chugh/car-rental-system-react-mysql-javaBackend](https://github.com/Aniket-Chugh/car-rental-system-react-mysql-javaBackend)

---

## 1. Project Description
“RentCar” is a **web application for car rental businesses**.  

- **Frontend:** ReactJS + Bootstrap (SPA)  
- **Backend:** Java Spring Boot  
- **Database:** MySQL  
- **Authentication:** JWT (JSON Web Tokens)  
- **User Roles:** User & Admin

---

## 2. Functionalities

### Anonymous Users
- View car fleet and car details
- Register and login

### Users
- Login & Logout
- Search & view car details
- Reserve cars
- View past reservations
- Check available cars by date

### Admins
- Add, edit, delete cars
- Approve or decline pending rents
- View all active rents
- Manage car details

---

## 3. Technologies & Versions
- **Java:** 17+  
- **Spring Boot:** 2.7.x  
- **ReactJS:** 18+  
- **Bootstrap:** 5.x  
- **MySQL:** 8+  
- **Maven:** 3.x (for backend dependencies)  

### Backend Dependencies (Maven)
- `spring-boot-starter-web`
- `spring-boot-starter-data-jpa`
- `spring-boot-starter-security`
- `jjwt` (JWT authentication)
- `mysql-connector-java`

### Frontend Dependencies (package.json)
- `react`
- `react-dom`
- `react-router-dom`
- `axios`
- `toastr`
- `lucide-react`

---

## 4. File Structure

### Backend (`server/`)
- `src/main/java/.../controller` → Handles API requests
- `src/main/java/.../service` → Business logic
- `src/main/java/.../repository` → Database operations
- `src/main/java/.../model` → Entities: User, Car, Rent, Sale
- `src/main/resources/application.properties` → DB connection, JWT config

### Frontend (`frontend-react/`)
- `src/components` → UI Components (CarCard, SearchInput, Paginator)
- `src/pages` → Pages (AllCars, CarDetails, CarsAvailable)
- `src/context` → Context API for global state (User, Dates)
- `src/services` → Axios calls to backend API
- `src/util` → Utility functions (date formatting, validation)

---

## 5. How it Works
1. Users register/login → receive JWT token  
2. Admin/User views car fleet  
3. Users can reserve cars → rent entry created in database  
4. Admin approves rent → sale finalized  
5. Frontend communicates with backend via **REST APIs**

---

## 6. Features & Highlights
- Pagination implemented for car lists (5 per page)  
- Search feature by car brand/model  
- Price calculation based on rental duration  
- Late return penalty applied  
- Security handled via JWT  

---

## 7. Running the Project

### Backend
```bash
cd server
mvn spring-boot:run

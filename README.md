# User Management API 🚀  

This is a **RESTful API** for managing users with **JWT authentication**. It supports **CRUD operations** (Create, Read, Update, Delete Users) and includes **role-based access control**.  

---

## 📌 Features  
✅ **User Authentication** (Register/Login with JWT)  
✅ **CRUD Operations** (Create, Read, Update, Delete Users)  
✅ **Protected Routes** (Only authenticated users can access)  
✅ **MongoDB Integration** (Persistent data storage)  
✅ **Proper Error Handling**  

---

## 📂 Project Structure  
```
backend-intern-assignment/
│── src/
│   ├── config/
│   │   ├── db.js
│   ├── controllers/
│   │   ├── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── models/
│   │   ├── userModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   ├── server.js
│── .env
│── package.json
│── README.md
```

---

## 🛠️ Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/backend-intern-assignment.git
cd backend-intern-assignment
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Start the Server  
```sh
npm start
```
Server will run on **http://localhost:5000**  

---

## 🔗 API Endpoints  

### 1️⃣ Register User  
- **URL:** `POST /api/users/register`  
- **Description:** Registers a new user.  
- **Request Body:**  
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "Password@123",
    "role": "user"
  }
  ```
- **Response:**  
  ```json
  {
    "message": "User registered successfully"
  }
  ```

---

### 2️⃣ Login User  
- **URL:** `POST /api/users/login`  
- **Description:** Authenticates user and returns a JWT token.  
- **Request Body:**  
  ```json
  {
    "email": "john@example.com",
    "password": "Password@123"
  }
  ```
- **Response:**  
  ```json
  {
    "message": "Login successful",
    "token": "your_jwt_token"
  }
  ```

---

### 3️⃣ Get All Users (Protected)  
- **URL:** `GET /api/users`  
- **Headers:** `Authorization: Bearer <token>`  
- **Response:**  
  ```json
  [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "phonenumber": "1234567891"
    },
    {
      "id": "2",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "phonenumber": "1234567892"
    }
  ]
  ```

---

### 4️⃣ Get Single User (Protected)  
- **URL:** `GET /api/users/:id`  
- **Headers:** `Authorization: Bearer <token>`  
- **Response:**  
  ```json
  {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

---

### 5️⃣ Update User (Protected)  
- **URL:** `PUT /api/users/:id`  
- **Headers:** `Authorization: Bearer <token>`  
- **Request Body:**  
  ```json
  {
    "name": "John Updated",
    "email": "johnupdated@example.com"
  }
  ```
- **Response:**  
  ```json
  {
    "message": "User updated successfully"
  }
  ```

---

### 6️⃣ Delete User (Admin Only)  
- **URL:** `DELETE /api/users/:id`  
- **Headers:** `Authorization: Bearer <token>`  
- **Response:**  
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

---

## 📌 Additional Features
✅ **JWT Authentication for Secure API Access**  
✅ **Error Handling for Invalid Inputs**  

---

## 📜 License  
This project is open-source and available under the **MIT License**.  

---

## 📝 Author  
Developed by **Meganathan** 🚀  

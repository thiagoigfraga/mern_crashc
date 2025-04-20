# MERN Crash Course

A full-stack application built using the MERN (MongoDB, Express, React, Node.js) stack.

## Description

This project demonstrates a complete web application with frontend and backend integration using the MERN stack technologies. It serves as a learning resource or starter template for MERN development.

## Technologies Used

- MongoDB - Document database
- Express.js - Node.js web framework
- React - Frontend JavaScript library
- Node.js - JavaScript runtime environment
- Mongoose - MongoDB object modeling
- JWT - Authentication and authorization

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mern_crashc.git
   cd mern_crashc
   ```

2. Install dependencies for backend:

   ```bash
   npm install
   ```

3. Install dependencies for frontend:

   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the root directory with:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

1. Start the backend server:

   ```bash
   npm run server
   ```

2. Start the frontend:

   ```bash
   npm run client
   ```

3. Run both concurrently:
   ```bash
   npm run dev
   ```

## Features

- User authentication (signup, login, logout)
- CRUD operations
- RESTful API
- Responsive design

## Acknowledgements

Special thanks to Burak Orkmez, Web Developer & Course Creator, for providing the knowledge and guidance for this project.

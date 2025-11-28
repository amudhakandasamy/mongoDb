# MongoDB Node.js Project

## Task link

https://docs.google.com/document/d/1bXs1DkwBBIqVdj2QIsmlVM_O-jG3_qwyvfXzVfCsSSM/edit?tab=t.0

## Overview
A Node.js application demonstrating MongoDB integration and database operations.

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas connection)
- npm

## Installation
```bash
npm install
```

## Configuration
Create a `.env` file with:
```
MONGODB_URI=your_connection_string
PORT=3000
```

## Usage
```bash
npm start
```

## Project Structure
```
├── models/
├── routes/
├── controllers/
├── config/
└── server.js

## API Endpoints
- `GET /api/users` - Retrieve all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Retrieve user by ID
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

## Dependencies
- express
- mongoose
- dotenv

## License
MIT

## API Documentation

See the https://documenter.getpostman.com/view/50347502/2sB3dLTWkX for detailed information on the modules and functions used in this project.

## Deployment link






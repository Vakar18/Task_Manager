﻿# Task_Manager
 This project allows you to efficiently manage your daily tasks by providing a complete set of CRUD (Create, Read, Update, Delete) operations. 
 The application is built using MongoDB, Node.js, and Express.js, providing a simple environment for managing your tasks.
 ## Getting Started
To get started with the Task Manager application, follow these steps:
1. Clone the repository to your local machine:(git clone https://github.com/Vakar18/Task_Manager)
2. Navigate to the project directory:(cd task-manager)
3. Install the necessary dependencies:(npm install)

## Environment Variables
For the smooth execution of the application, you need to set the following environment variables:
1. SERVER_PORT: The port on which the server will run.
2. MONGODB_CONNECTION_URL: The URL for connecting to your MongoDB database.
A sample .env.example file is provided. Make sure to fill in the required values and rename the file to .env before running the application.

## Running the Application
To run the application, execute the following command:(npm start)
This will start the server, allowing you to interact with the Task Manager application through API requests.

## Documentation
Explore the application's functionality by utilizing the provided endpoints. 
The documentation outlines each endpoint's purpose and how to use it effectively.

## API Endpoints
The back-end API provides the following endpoints:
1. GET /api/v1/tasks - Retrieve all tasks
2. POST /api/v1/tasks - Create a new task
3. GET /api/v1/tasks/:id - Retrieve a specific task by ID
4. PATCH /api/v1/tasks/:id - Update a specific task by ID
5. DELETE /api/v1/tasks/:id - Delete a specific task by ID

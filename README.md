# Message Board (Node.js + Express + EJS)

A simple message board application built with **Node.js, Express, and EJS**. Users can submit messages which are then displayed on the board. Messages exist only while the server is running since the app does not use a database.

This project was primarily created to practice **Express.js architecture and best practices**, including routing, middleware, controllers, and error handling.

---

## Features

- View a list of messages
- Submit new messages
- View individual message details
- Server-side rendering using **EJS**
- Custom error handling
- Global error middleware
- MVC-style separation (routes, controllers, data)

---

## Tech Stack

- **Node.js**
- **Express**
- **EJS**

---

## Concepts Practiced

This project focuses on learning core Express concepts and backend structure.

### Routing

Routes are separated into dedicated router files using Express Router.

### Controllers

Route logic is separated into controller functions to keep routing files clean.

### Middleware

Express middleware is used for:

- Parsing form data
- Routing requests
- Handling errors globally

### Custom Errors

A custom `NotFoundError` class is used to represent specific HTTP errors.

### Error Handling

A global error-handling middleware captures thrown errors and sends appropriate responses.

### Project Structure

The application follows a modular structure:

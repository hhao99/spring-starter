# Blog App

A full-stack starter project built with Kotlin, Spring Boot, and Angular. It provides a simple CRUD experience for users with a REST API backend and a modern Angular frontend.

## Overview

This project demonstrates how to combine:

- a Spring Boot backend written in Kotlin
- a REST API with database persistence
- an Angular frontend for interacting with the API
- an H2 in-memory database for local development

It is a good starting point for building small-to-medium web applications with a clear separation between frontend and backend.

## Features

- Create, read, update, and list users
- REST endpoints for user management
- Angular-based user interface
- Local development setup with H2 database
- Ready-to-extend architecture for adding services, validation, and authentication

## Tech Stack

### Backend
- Kotlin
- Spring Boot 4.1
- Spring Web MVC
- Spring Data JDBC
- H2 Database
- Gradle

### Frontend
- Angular 22
- Angular Material
- Tailwind CSS
- RxJS

## Project Structure

- backend logic lives under src/main/kotlin/rp/blog
- REST controllers are in src/main/kotlin/rp/blog/controllers
- database schema is defined in src/main/resources/schema.sql
- frontend code is located in frontend/src/app

## Getting Started

### Prerequisites

- Java 25 or newer
- Node.js and pnpm
- Gradle wrapper is included, so no separate Gradle install is required

### Run the backend

From the project root:

```bash
./gradlew bootRun
```

The backend will start on:

- http://localhost:8080

### Run the frontend

From the frontend folder:

```bash
cd frontend
pnpm install
pnpm start
```

The Angular app will typically run on:

- http://localhost:4200

## API Endpoints

The current API is exposed under:

- GET /api/v1/users
- POST /api/v1/users
- PUT /api/v1/users/{id}

Example requests are available in [src/test/test.user.http](src/test/test.user.http).

## Database

The application uses an H2 in-memory database for local development.

You can access the H2 console at:

- http://localhost:8080/h2-console

Use the JDBC URL from the application configuration when prompted.

## Development Notes

- The backend and frontend are intentionally separated for easier development and deployment.
- The frontend communicates with the backend through HTTP requests to the Spring API.
- You can extend this starter by adding validation, authentication, tests, and additional entities.

## License

This project is intended as a starter example and can be adapted for your own use.

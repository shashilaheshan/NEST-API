# Books API

A simple NestJS API for managing books with MongoDB.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running on localhost:27017)

## Installation

```bash
npm install
```

## Running the App

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Books

- `GET /books` - Get all books
- `GET /books/:id` - Get a book by ID
- `POST /books` - Create a new book
- `DELETE /books/:id` - Delete a book by ID
- `POST /books/seed-dummy` - Create 100 dummy books

### Example Request to Create a Book

```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sample Book",
    "author": "Sample Author",
    "isbn": "978-1234567890",
    "publishedYear": 2023,
    "genre": "Fiction",
    "pages": 300,
    "description": "A sample book description",
    "rating": 4.5,
    "price": 29.99
  }'
```

### Example Request to Get All Books

```bash
curl http://localhost:3000/books
```

### Example Request to Delete a Book

```bash
curl -X DELETE http://localhost:3000/books/:id
```

### Seed Dummy Data

To populate the database with 100 dummy books:

```bash
curl -X POST http://localhost:3000/books/seed-dummy
```

## Database

The application connects to MongoDB at `mongodb://localhost:27017/booksdb`. Make sure MongoDB is running before starting the application. 
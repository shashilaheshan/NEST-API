# Books API

A simple NestJS API for managing books with MongoDB.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running on localhost:27017)

## Installation

```bash
npm install
```

## Environment Configuration

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your configuration:
```env
# Application Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/booksdb

# Application Settings
APP_NAME=Books API
APP_VERSION=1.0.0
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

The application connects to MongoDB using the `MONGODB_URI` environment variable. Make sure MongoDB is running before starting the application.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Application port | `3000` |
| `NODE_ENV` | Environment mode | `development` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/booksdb` |
| `APP_NAME` | Application name | `Books API` |
| `APP_VERSION` | Application version | `1.0.0` |

## Different Environments

- **Development**: Use `.env` file
- **Production**: Use `.env.production` file or environment variables

To run with a specific environment file:
```bash
# Development (default)
npm run start:dev

# Production
NODE_ENV=production npm run start:prod
``` 
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).exec();
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async remove(id: string): Promise<Book> {
    const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();
    if (!deletedBook) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return deletedBook;
  }

  async createDummyBooks(): Promise<string> {
    const existingBooks = await this.bookModel.countDocuments();
    if (existingBooks >= 100) {
      return 'Dummy books already exist';
    }

    const genres = ['Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Sci-Fi', 'Fantasy', 'Biography', 'History', 'Self-Help', 'Thriller'];
    const authors = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Wilson', 'Charlie Brown', 'Emma Davis', 'Frank Miller', 'Grace Lee', 'Henry Taylor', 'Ivy Chen'];
    
    const dummyBooks = [];
    for (let i = 1; i <= 100; i++) {
      const book = {
        title: `Book Title ${i}`,
        author: authors[Math.floor(Math.random() * authors.length)],
        isbn: `978-${Math.random().toString().substr(2, 10)}`,
        publishedYear: Math.floor(Math.random() * (2024 - 1900)) + 1900,
        genre: genres[Math.floor(Math.random() * genres.length)],
        pages: Math.floor(Math.random() * 500) + 100,
        description: `This is a compelling book about ${genres[Math.floor(Math.random() * genres.length)].toLowerCase()}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        rating: Math.round((Math.random() * 5) * 10) / 10,
        price: Math.round((Math.random() * 50 + 10) * 100) / 100,
      };
      dummyBooks.push(book);
    }

    await this.bookModel.insertMany(dummyBooks);
    return 'Successfully created 100 dummy books';
  }
} 
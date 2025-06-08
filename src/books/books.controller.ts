import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Book> {
    return this.booksService.remove(id);
  }

  @Post('seed-dummy')
  async createDummyBooks(): Promise<{ message: string }> {
    const result = await this.booksService.createDummyBooks();
    return { message: result };
  }
} 
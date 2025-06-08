import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksService {
    private bookModel;
    constructor(bookModel: Model<BookDocument>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    remove(id: string): Promise<Book>;
    createDummyBooks(): Promise<string>;
}

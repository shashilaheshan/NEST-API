import { Document } from 'mongoose';
export type BookDocument = Book & Document;
export declare class Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre: string;
    pages: number;
    description: string;
    rating: number;
    price: number;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, Document<unknown, any, Book> & Book & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, Document<unknown, {}, import("mongoose").FlatRecord<Book>> & import("mongoose").FlatRecord<Book> & {
    _id: import("mongoose").Types.ObjectId;
}>;

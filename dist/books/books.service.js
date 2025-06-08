"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const book_schema_1 = require("./schemas/book.schema");
let BooksService = class BooksService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async create(createBookDto) {
        const createdBook = new this.bookModel(createBookDto);
        return createdBook.save();
    }
    async findAll() {
        return this.bookModel.find().exec();
    }
    async findOne(id) {
        const book = await this.bookModel.findById(id).exec();
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }
    async remove(id) {
        const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();
        if (!deletedBook) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        return deletedBook;
    }
    async createDummyBooks() {
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
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(book_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BooksService);
//# sourceMappingURL=books.service.js.map
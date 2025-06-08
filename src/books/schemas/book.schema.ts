import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema({ timestamps: true })
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  isbn: string;

  @Prop({ required: true, min: 1000, max: new Date().getFullYear() })
  publishedYear: number;

  @Prop({ required: true })
  genre: string;

  @Prop({ min: 0 })
  pages: number;

  @Prop()
  description: string;

  @Prop({ min: 0, max: 5 })
  rating: number;

  @Prop({ default: 0 })
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book); 
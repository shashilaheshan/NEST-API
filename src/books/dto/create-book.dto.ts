import { IsString, IsNumber, IsOptional, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  isbn: string;

  @IsNumber()
  @Min(1000)
  @Max(new Date().getFullYear())
  publishedYear: number;

  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  pages?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  rating?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;
} 
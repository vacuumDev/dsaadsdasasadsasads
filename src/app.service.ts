import { Injectable } from "@nestjs/common";
import Book from "./entity/book.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { CreateBookDto } from "./dto/create-book.dto";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>
  ) {}
  createBook(book: CreateBookDto) {
    const createdBook = new Book();
    return this.bookRepository.save(Object.assign(createdBook, book));
  }

  getAllBooks() {
    return this.bookRepository.find();
  }

  getBookById(id: number) {
    return this.bookRepository.findOneBy({ id });
  }

  deleteBookById(id: number) {
    return this.bookRepository.delete(id);
  }

  findByKeyword(keyword: string) {
    return this.bookRepository.findBy([
      { title: Like(`%${keyword}%`) },
      { author: Like(`%${keyword}%`) },
    ]);
  }
}

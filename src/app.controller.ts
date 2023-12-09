import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateBookDto } from "./dto/create-book.dto";

@Controller("books")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.appService.createBook(createBookDto);
  }

  @Get("filter")
  getFilteredBooks(@Query("keyword") keyword: string) {
    return this.appService.findByKeyword(keyword);
  }

  @Get()
  getAllBooks() {
    return this.appService.getAllBooks();
  }

  @Get(":id")
  getBookById(@Param("id", ParseIntPipe) id: number) {
    return this.appService.getBookById(id);
  }

  @Delete(":id")
  deleteBookById(@Param("id", ParseIntPipe) id: number) {
    return this.appService.deleteBookById(id);
  }
}

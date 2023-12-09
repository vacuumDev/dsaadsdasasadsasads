import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  genre: string;
}

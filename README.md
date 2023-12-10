## Установка скрипта

```bash
$ npm install
```

Надо изменить настройки MySQL сервера, в файле .env

## Запуск

```bash
$ npm run start:dev
```

## API endpoints

```
Получение всех книг: GET http://localhost:3000/books
Получение конкретной книги: GET http://localhost:3000/books/1
Поиск по автору либо по названию: GET http://localhost:3000/books/filter?keyword=Понасенков
Удаление книги: DELETE http://localhost:3000/books/1
Создание книги: POST http://localhost:3000/books

Схема для создания книги

{
    "title": "Название книги",
    "description": "Описание",
    "author": "Понасенков",
    "genre": "Художка"
}
```

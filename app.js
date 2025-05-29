const express = require('express');
const app = express();
const port = 3000;

let books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: '1984', author: 'George Orwell' },
];

app.use(express.json());

app.listen(port,() => {
    console.log ("web development intership");
})

app.get('/books', (req,res) => {
    res.json(books);
})

app.post('/books', (req,res) => {
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
})

app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books[index] = { id, ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
  res.json({ message: 'Book deleted' });
});

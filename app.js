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
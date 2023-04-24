import { useState } from "react";

//components
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [counter, setCounter] = useState(4);
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter",
    },
    {
      id: 2,
      title: "Dark Tower",
    },
    {
      id: 3,
      title: "Hunger Games",
    },
  ]);

  const createBook = (title) => {
    setBooks((books) => [
      ...books,
      {
        id: counter,
        title: title,
      },
    ]);
    setCounter(counter + 1);
    console.log(books);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (id, newTitle) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(newBooks);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;

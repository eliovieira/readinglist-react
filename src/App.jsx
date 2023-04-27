import { useEffect, useContext } from "react";

//context
import BooksContext from "./context/books";
//components
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const { getBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;

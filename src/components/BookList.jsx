import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-hooks-context";

const BookList = () => {
  const { books } = useBooksContext();

  return (
    <div className="book-list">
      {books && books.map((book) => <BookShow key={book.id} book={book} />)}
    </div>
  );
};

export default BookList;

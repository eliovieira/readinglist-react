import BookShow from "./BookShow";

const BookList = ({ books, deleteBook, editBook }) => {
  console.log(books);
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow
          key={book.id}
          book={book}
          deleteBook={deleteBook}
          editBook={editBook}
        />
      ))}
    </div>
  );
};

export default BookList;

import { useState, useRef } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBook, editBook }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="book-show" key={book.id}>
      <div className="actions">
        <button className="delete" onClick={handleDelete}>
          x
        </button>

        <button className="edit" onClick={handleEdit}>
          edit
        </button>
      </div>
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt={book.title}
      />
      {isEditing ? (
        <>
          <BookEdit
            book={book}
            setIsEditing={setIsEditing}
            editBook={editBook}
          />
        </>
      ) : (
        <span className="cardTitle">{book.title}</span>
      )}
    </div>
  );
};

export default BookShow;

import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-hooks-context";

const BookShow = ({ book }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { deleteBook } = useBooksContext();

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
          <BookEdit book={book} setIsEditing={setIsEditing} />
        </>
      ) : (
        <span className="cardTitle">{book.title}</span>
      )}
    </div>
  );
};

export default BookShow;

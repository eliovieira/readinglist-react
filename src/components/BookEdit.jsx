import { useState, useRef, useEffect } from "react";

const BookEdit = ({ book, setIsEditing, editBook }) => {
  const [newTitle, setNewTitle] = useState(book.title);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEdit = () => {
    editBook(book.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          ref={inputRef}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default BookEdit;

import { useRef, useState, useEffect } from "react";

const BookCreate = ({ createBook }) => {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCreateBook = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form className="createBookForm" onSubmit={handleCreateBook}>
        <h3>Add a book</h3>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          ref={inputRef}
          placeholder="Insert a book's title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Add</button>
      </form>
    </div>
  );
};

export default BookCreate;

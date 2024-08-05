import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleBookSubmit = (values, { resetForm }) => {
    if (editingBook !== null) {
      const updatedBooks = books.map((book, index) =>
        index === editingBook ? values : book
      );
      setBooks(updatedBooks);
      setEditingBook(null);
    } else {
      setBooks([...books, values]);
    }
    resetForm();
  };

  const handleAuthorSubmit = (values, { resetForm }) => {
    if (editingAuthor !== null) {
      const updatedAuthors = authors.map((author, index) =>
        index === editingAuthor ? values : author
      );
      setAuthors(updatedAuthors);
      setEditingAuthor(null);
    } else {
      setAuthors([...authors, values]);
    }
    resetForm();
  };

  const handleEditBook = (index) => {
    setEditingBook(index);
  };

  const handleDeleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const handleEditAuthor = (index) => {
    setEditingAuthor(index);
  };

  const handleDeleteAuthor = (index) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Library Management System</h1>
      <div className="mb-5">
        <h2>Manage Books</h2>
        <BookForm
          initialValues={editingBook !== null ? books[editingBook] : { title: '', author: '', isbn: '', publicationDate: '' }}
          onSubmit={handleBookSubmit}
        />
        <ul className="list-group mt-3">
          {books.map((book, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {book.title} by {book.author} (ISBN: {book.isbn}, Published: {book.publicationDate})
              <div>
                <button className="btn btn-secondary btn-sm me-2" onClick={() => handleEditBook(index)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteBook(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Manage Authors</h2>
        <AuthorForm
          initialValues={editingAuthor !== null ? authors[editingAuthor] : { name: '', birthDate: '', bio: '' }}
          onSubmit={handleAuthorSubmit}
        />
        <ul className="list-group mt-3">
          {authors.map((author, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {author.name} (Born: {author.birthDate}) - {author.bio}
              <div>
                <button className="btn btn-secondary btn-sm me-2" onClick={() => handleEditAuthor(index)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteAuthor(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

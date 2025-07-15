function BookList() {
  const books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Atomic Habits", author: "James Clear" },
    { id: 3, title: "Deep Work", author: "Cal Newport" },
  ];

  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '10px' }}>
      <h2>📚 Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

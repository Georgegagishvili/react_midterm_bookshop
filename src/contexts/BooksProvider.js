import React, { useState, useEffect } from "react";
// import API_SERVICE from "../services/api";

export const BooksContext = React.createContext(null);

function BooksProviderComponent({ children }) {
  const [bookList, setBookList] = useState([]);

  // const loadBooksListAsync = async () => {
  //   const list = await API_SERVICE.getBooksListAsync();
  //   setBookList(list);
  // };

  // useEffect(() => {
  //   loadBooksListAsync();
  // }, []);

  const addNewBook = (newBook) => {
    console.log(newBook);
    const newList = [...bookList, newBook];
    setBookList(newList);
  };

  BooksContext.displayName = "BooksContext";
  return (
    <BooksContext.Provider value={{ addNewBook, bookList, setBookList }}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProviderComponent;

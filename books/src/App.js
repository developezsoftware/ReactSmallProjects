import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BooksContext from "./context/books";
import BookList from "./components/BookList";

function App() {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div className="app">
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;
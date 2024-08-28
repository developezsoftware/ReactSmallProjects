import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookByID} = useContext(BooksContext);

    const handleDeleteClick = () => {
        deleteBookByID(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>;

    if (showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    return (
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
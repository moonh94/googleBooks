import axios from "axios";
// AIzaSyBb62MAlLr0AOR4RC_kyyxFf14yq64LKIs 

export default {

  // call to the Google Book API when searching for a book
  searchBooks: function(bookSearch) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookSearch + "&key=AIzaSyBb62MAlLr0AOR4RC_kyyxFf14yq64LKIs");
  },

  // display the saved books from our database
  getSavedBooks: function(id) {
    return axios.get("/api/books/saved" + id );
  },
  // delete a saved book from our database
  deleteBook: function(id) {
    return axios.delete("/api/books/delete/" + id);
  },

  // save the book in our database
  saveBook: function(bookKey, bookData) {
    return axios.post("/api/books/" + bookKey, bookData);
  }
};
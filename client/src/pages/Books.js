import React, { Component } from "react";
import SearchCard from "../components/SearchCard";
import SearchResult from "../components/Search";
import BookItemCard from "../components/BookResult";
import SaveCard from "../components/Saved";
import API from "../utils/API";


class Books extends Component {

    state = {
        results: [],
        savedBooks: [],
        bookSearch: ""
    };

    componentDidMount() {
        API.searchBooks()
            .then(res => this.setState({savedBooks: res.data}))
            .catch(err => console.log(err));
    }


    //On Button click for searching books 
    handleSearch = event => {
        this.setState({ results: event.target.value });
        if (this.state.bookSearch) {
            API.searchBooks(this.state.bookSearch)
                .then(res =>this.setState({results: res.data.items }))
                .catch(err => console.log(err));
        }
    }

    handleInputChange = event => {
        this.setState({bookSearch: event.target.value})
    }

    handleSave = event => {
        const bookIndex = event.target.attributes.getNamedItem("data-index").value;
        const saveBook = this.state.results[bookIndex];
        console.log(saveBook);

        const bookData = {
            title: saveBook.volumeInfo.title,
            link: saveBook.volumeInfo.previewLink,
            thumbnail: saveBook.volumeInfo.imageLinks.thumbnail,
            author: saveBook.volumeInfo.authors[0],
            description: saveBook.volumeInfo.description,
            key: saveBook.id
        }

        API.saveBook(bookData.key, bookData)
            .then(API.getSavedBooks()
                .then(res => { this.setState({savedBooks: res.data})
                    console.log("In state", this.state.savedBooks)
                    console.log("Length", this.state.savedBooks.length)
                })
            )
    }

    handleDelete = event => {
        const bookIndex = event.target.attributes.getNamedItem("data-index").value;
        const deleteBook = this.state.savedBooks[bookIndex]
        console.log(deleteBook._id)

        API.deleteBook(deleteBook._id).then(
             window.location.reload()
        )

    }

    render() {
        return (
            <div>
                {window.location.pathname === "/" ?
                    <div>
                        <SearchCard
                            value={this.state.bookSearch}
                            onChange={this.handleInputChange}
                            onClick={this.handleSearch}
                        />

                        <SearchResult>
                            {this.state.results ? (

                                this.state.results.map((book, i) => {
                                    return (
                                        <BookItemCard
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            author={(book.volumeInfo.authors) ? (book.volumeInfo.authors[0]) : ("Anonymous")}
                                            href={book.volumeInfo.previewLink}
                                            thumbnail={(book.volumeInfo.imageLinks) ? (book.volumeInfo.imageLinks.thumbnail) : ("http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg")}
                                            description={book.volumeInfo.description}
                                            save={this.handleSave}
                                            index={i}
                                        />
                                    )
                                })
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </SearchResult>
                    </div>
                    :
                    <SaveCard>
                       
                         {this.state.savedBooks.map((book, i) => {
                                return (
                                    <BookItemCard
                                        key={book._id}
                                        title={book.title}
                                        author={book.author}
                                        href={book.link}
                                        description={book.description}
                                        delete={this.handleDelete}
                                        index={i}
                                    />
                                )
                            })
                         }
                        
                    </SaveCard>
                }

            </div>
        )
    }

}

export default Books;
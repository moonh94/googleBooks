import React from "react";
import SearchForm from "../components/Search";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

class Search extends React.Component {
   state = {
            bookInput: "",
            bookData: []
        }
        // this.handleSearchClick = this.handleSearchClick.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    

    handleChange(event) {
        event.preventDefault();
        this.setState({bookInput: event.target.value})
    }

    handleSearchClick(event) {
        event.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    this.setState({bookData: response.data});
                    this.setState({bookInput: ""});
                    console.log(response)
                }
            
            );
    }

    render() {
        return(
            <>
                <SearchForm
                onClick={ () => this.handleSearchClick} />
                {this.state.bookData.length ? (
                    <ResultsContainer bookData={this.state.bookData} path={this.props.match.path}/>
                ) : null }
           </>
        );
    }
}

export default Search;

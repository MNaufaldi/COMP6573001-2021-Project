import React, { Component } from 'react';
import axios from 'axios';

class Books extends Component{
    componentDidMount() {
        this.fetchBooks();
    }

    async fetchBooks() {
        console.log('tes')
        axios({
            url: 'https://localhost:8080/graphiql',
            method: 'post',
            data: {
              query: `
                query books {
                    BookTitle
                    _id
                  }
                `
            }
          }).then((result) => {
            console.log(result.data)
          });
    }

    render() {
        return (
            <div>
                Pog
            </div>
        )
    }

}

export default Books;
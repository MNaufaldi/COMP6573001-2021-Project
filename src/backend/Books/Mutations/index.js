const { addAuthor, updateAuthor, deleteAuthor } = require('./AuthorMutations');
const { addBook, updateBook, deleteBook} = require('./BookMutations')

module.exports = {
    addAuthor,
    updateAuthor,
    deleteAuthor,
    addBook,
    updateBook,
    deleteBook
}
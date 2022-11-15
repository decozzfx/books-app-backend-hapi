const { deleteNoteByIdHandler } = require('./handler');
const { editBookByIdHandler } = require('./handler');
const { getNoteByIdHandler } = require('./handler');
const { addBookHandler, getAllBooksHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;

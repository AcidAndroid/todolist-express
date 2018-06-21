const mongoose = require('mongoose');


class Database {
    constructor() {
      this._connect()
    }
  _connect() {
       mongoose.connect(`mongodb://mongo:mongomon9@ds261570.mlab.com:61570/todobedu`)
         .then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }
  module.exports = new Database()
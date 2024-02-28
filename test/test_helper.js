const mongoose = require('mongoose');
  
// tells mongoose to use ES6 implementation of promises
mongoose.Promise = global.Promise;
const MONGODB_URI = 'mongodb://localhost:27017/usersdb';
mongoose.connect(MONGODB_URI);
  
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ', error);
    });
      
    // runs before each test
    // beforeEach((done) => {
    //     mongoose.connection.collections.Users.drop(() => {
    //     done();
    //    });
    // });
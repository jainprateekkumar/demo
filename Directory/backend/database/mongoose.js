const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://directory_user:WIkOrFlHf3HWiMYE@directory.zt3ojih.mongodb.net/directory?retryWrites=true&w=majority').
    then(() => {
        console.log("database connected");
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = mongoose;
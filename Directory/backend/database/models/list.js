const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        maxlength: 100,
        required: [true, "First Name required"]
    },
    lastname: {
        type: String,
        trim: true,
        maxlength: 100,
        required: [true, "Last Name required"]
    },
    email: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;
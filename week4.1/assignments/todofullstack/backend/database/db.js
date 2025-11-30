const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String
})

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}
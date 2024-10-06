const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://myAtlasDBUser:6H7gCtwfV7PIqIJh@myclusterdatafortesting.fw5nw.mongodb.net/todos');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type:Boolean,
        default:false,
    },
});


const todo= mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Must provide the task title!'],
        trim: true,
        maxlength: [100, "Title can't be more than 100 characters!"],
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, "Description can't be more than 500 characters!"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Task', taskSchema);

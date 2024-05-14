const Task = require("../DB/models/task.js");
const { createCustomError } = require("../errors/custom-error.js");
const asyncWrapper = require("../middlewares/asyncWrapper.js");

const getAllTasks = asyncWrapper(async (req, res, next) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const singleTask = await Task.findById(id);

    if (!singleTask) {
        return next(createCustomError('Task Not Found', 404));
    }

    res.status(200).json({ singleTask });
});

const addTask = asyncWrapper(async (req, res, next) => {
    const { title, description } = req.body;
    const foundTask = await Task.findOne({ title });

    if (foundTask) {
        return next(createCustomError('This task title already exists!', 409));
    }

    const newTask = await Task.create({ title, description });
    res.status(201).json({ message: 'Added new task successfully!', newTask });
});

const editTask = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, {
        title,
        description,
        completed,
    }, {
        new: true,
        runValidators: true,
    });

    if (!updatedTask) {
        return next(createCustomError('Task Not Found', 404));
    }

    res.status(200).json({ message: 'Task updated successfully!', updatedTask });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
        return next(createCustomError('Task Not Found to delete!', 404));
    }

    res.status(200).json({ message: 'Task deleted successfully!' });
});

module.exports = { getAllTasks, getTask, addTask, editTask, deleteTask };

const express = require("express");
const router = express.Router();
const {
    getAllTasks,
    getTask,
    addTask,
    editTask,
    deleteTask,
} = require("../controllers/task.js");

router.route('/').get(getAllTasks).post(addTask);
router.route('/:id').get(getTask).patch(editTask).delete(deleteTask);

module.exports = router;

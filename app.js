const express = require("express");
const app = express();
const connectDB = require("./DB/connection.js");
const tasks = require("./routes/task.js");
const notFoundHandler = require("./middlewares/not-found.js");
const errorHandler = require("./middlewares/errorHandler.js");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();

// middleware
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());


// routes
app.use('/api/v1/tasks', tasks);
app.use(notFoundHandler);
app.use(errorHandler);

const port = 3000;

const start = async () => {
    try {
        await connectDB();
        app.listen(port, console.log(`Server is running on port ${port}...`));
    } catch (error) {
        console.error(error);
    }
};

start();

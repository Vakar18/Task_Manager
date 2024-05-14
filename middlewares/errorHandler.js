const CustomError = require("../errors/custom-error.js");

const errorHandler = (error, req, res, next) => {
    if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: error });
}

module.exports = errorHandler;

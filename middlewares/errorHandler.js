

const custom_error = require("../errors/custom-error.js")

const errorHandler = (error, req, res, next) => {
    if (error instanceof custom_error) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: error });
}

module.exports =  errorHandler;

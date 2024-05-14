
 class custom_error extends Error {
    constructor(msg, statusCode) {
        super(msg)
        this.statusCode = statusCode
    }
};

 const createCustomError = (message, statusCode) => {
    return new custom_error(message, statusCode);
}

module.exports = {createCustomError , custom_error}
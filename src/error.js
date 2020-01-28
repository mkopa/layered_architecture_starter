function notFound(req, res, next) {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
}

function error(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.json({message: err.message, error: isDevelopment() ? err.stack : {}});
}

function isDevelopment() {
    return process.env.NODE_ENV === "development";
}

module.exports = {notFound, error};
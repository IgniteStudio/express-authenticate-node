module.exports = (req, res, next) => {
    const authenicated = req.header("authenticated");

    if(authenicated === "yes") {
        next();
    } else {
        res.status(403).json({
            message: "Not Authenticated"})
    }
}
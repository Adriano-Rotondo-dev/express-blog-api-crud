function notFound(req, res, next) {     
    res.status(404)
    res.json({
        error: "Not Found",
        message: "Page not Found"
    })
}

module.exports = notFound; 


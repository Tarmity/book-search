const router = require("express").Router();
const bookRoutes = require("./books");
const axios = require('axios')

// Book routes
router.use("/books", bookRoutes);
router.get("/book-search", (req, res) => {
    let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${req.query.search}`
    axios({
        url : queryUrl,
        method: 'get'
    }).then ((response) => {
        const data = response.data;

        res.json(data);
    })

})

module.exports = router;

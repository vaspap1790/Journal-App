const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("home-guest");
});

router.get('/about', (req, res) => {

    res.send("This is our About Page");
});

module.exports = router;
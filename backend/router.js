const express = require('express');
const router = express.Router();


// ---------------------------------------------------- Router GET request HERE -->
router.get('/', (req, res) => {
    res.send('Server is up and running.');
});

module.exports = router;
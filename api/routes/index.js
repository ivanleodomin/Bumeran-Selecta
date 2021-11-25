const express = require("express");
const router = express.Router();
const vacants = require("./vacants")

/* router.use('/recluiters', recluiters) */
router.use('/vacants', vacants)

module.exports = router;

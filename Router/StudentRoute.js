const express = require('express');
const { StudentInsert, Display, Delete, Update }= require('../Controller/StudentController');

const router = express.Router();

router.post("/insert", StudentInsert);
router.get("/display/:id", Display)
router.delete("/delete/:id", Delete)
router.put("/update/:id", Update)

module.exports = router;
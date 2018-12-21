var express = require('express');
var router = express.Router();
const db = require('../utils/mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query('select * from user_table', [], (result, fields) => {
        console.log('查询结果: ', result);
        res.apiSuccess(result);
    });
});

module.exports = router;

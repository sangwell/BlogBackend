var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbConnection = {
    host     : 'localhost',
    user     : 'root',
    password : 'root'
};

/* GET users listing. */
router.post('/add', function(req, res, next) {
    var Id = req.body.Id;
    var Title = req.body.Title;
    var Content = req.body.Content;
    var Date = req.body.Date;
    var Tags = req.body.Tags;
    var sqlUrl = 'call blog.blog_add(?, ?, ?, ?, ?);';
    var inParams = [Id,Title,Content,Date,Tags];
    var connection = mysql.createConnection(dbConnection);
    connection.connect();
    connection.query(sqlUrl, inParams, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
    connection.end();
});

router.post('/getBlogList', function(req, res, next) {
    console.log(req.body);
    var Title = req.body.Title;
    var CurrentPage = req.body.CurrentPage;
    var PageSize = req.body.PageSize;
    var sqlUrl = 'call blog.blog_getBlogList(?, ?, ?);';
    var inParams = [Title,CurrentPage,PageSize];
    console.log(inParams);
    var connection = mysql.createConnection(dbConnection);
    connection.connect();
    connection.query(sqlUrl, inParams, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows[0]);
    });
    connection.end();
});

module.exports = router;

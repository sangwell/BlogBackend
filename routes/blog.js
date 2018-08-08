var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbConnection = require('../db/dbConnection');

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
    var Title = req.body.Title;
    var CurrentPage = req.body.CurrentPage;
    var PageSize = req.body.PageSize;
    var sqlUrl = 'call blog.blog_getBlogList(?, ?, ?);';
    var inParams = [Title,CurrentPage,PageSize];
    var connection = mysql.createConnection(dbConnection);
    connection.connect();
    connection.query(sqlUrl, inParams, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows[0]);
    });
    connection.end();
});

router.post('/getBlogContent', function(req, res, next) {
    var Id = req.body.Id;
    var sqlUrl = 'call blog.blog_getBlogContent(?);';
    var inParams = [Id];
    var connection = mysql.createConnection(dbConnection);
    connection.connect();
    connection.query(sqlUrl, inParams, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows[0][0]);
    });
    connection.end();
});

router.post('/getBlogListByTag', function(req, res, next) {
    var Tag = req.body.Tag;
    var sqlUrl = 'call blog.blog_getBlogListByTag(?);';
    var inParams = [Tag];
    var connection = mysql.createConnection(dbConnection);
    connection.connect();
    connection.query(sqlUrl, inParams, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows[0]);
    });
    connection.end();
});

module.exports = router;

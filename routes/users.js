var express = require('express');
var mysql = require('mysql');
var router = express.Router();



var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root'
});
/* GET users listing. */
router.post('/', function(req, res, next) {
  var Id = req.body.Id;
  var Title = req.body.Title;
  var Content = req.body.Content;
  var Date = req.body.Date;
  var Tags = req.body.Tags;
  var sqlUrl = 'call blog.blog_add(?, ?, ?, ?, ?);';
  var inParams = [Id,Title,Content,Date,Tags];
  connection.connect();
  connection.query(sqlUrl, inParams, function(err, rows, fields) {
      if (err) throw err;
      res.json(rows);
  });
  connection.end();
});

module.exports = router;

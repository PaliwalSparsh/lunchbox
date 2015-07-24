var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

mysql = require('mysql');
 
//mysql connection function
var dbconnect= function(){
  var connection = mysql.createConnection({
  host     : "localhost",
  user     : 'root',
  password : 'mongodb',
  database : 'lunchbox'
  });
  return connection;
};

//express bodyparser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

router.get('/register_done', function(req, res) {
  res.render('register_done');
});

router.get('/register_moms', function(req, res) {
  res.render('register', { title: 'Register Moms', page: 'moms'});
});

router.get('/register_kids', function(req, res) {
  res.render('register', { title: 'Register Kids', page: 'kids'});
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

router.get('*', function(req, res) {
  res.send("Error 404! Page not Found");
});

router.post('/post_moms',function(req,res){
  console.log(req.body); 
  var connection=dbconnect();
  var post={fName:req.body.InputName,email:req.body.InputEmail,phone:req.body.InputPhone,address:req.body.InputAddress};
  var query = connection.query('INSERT INTO moms SET ?', post, function(err, result) {
    console.log("form submitted");
  });
  console.log(query.sql);
  connection.end();
  res.redirect('/register_done');
});

router.post('/post_kids',function(req,res){
  console.log(req.body); 
  var connection=dbconnect();
  var post = {fName:req.body.InputName,email:req.body.InputEmail,phone:req.body.InputPhone,address:req.body.InputAddress};
  var query = connection.query('INSERT INTO kids SET ?', post, function(err, result) {
    console.log("form submitted");
  });
  console.log(query.sql);
  connection.end();
  res.redirect('/register_done');
});

module.exports = router;

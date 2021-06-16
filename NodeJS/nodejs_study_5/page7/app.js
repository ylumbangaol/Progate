const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'blog'
});

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/list', (req, res) => {
  // Add a if statement to compare the userId property from the session with undefined
  if (req.session.userId === undefined) {
    console.log('You are not logged in');
  } else {
    console.log('You are logged in');
  }
  connection.query(
    'SELECT * FROM articles',
    (error, results) => {
      res.render('list.ejs', { articles: results });
    }
  );
});

app.get('/article/:id', (req, res) => {
  const id = req.params.id;
  connection.query(
    'SELECT * FROM articles WHERE id = ?',
    [id],
    (error, results) => {
      res.render('article.ejs', { article: results[0] });
    }
  );
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (results.length > 0) {
        
                  // Remove the 1 line below
          

          // Store the user's ID as a property of the session
          
        if (req.body.password === results[0].password){
          req.session.userId = results[0].id;
          res.redirect('/list');
        } else {
          // Remove the 1 line below
          
          res.redirect('/login');
        }
      } else {
        res.redirect('/login');
      }
      
    }
  );
});

app.listen(3000);

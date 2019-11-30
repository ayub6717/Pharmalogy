const express = require('express');
const app = express();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('medicine.db');

app.use(express.static('/A'));

app.get('/users', (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all('SELECT BrandName FROM beximco', (err, rows) => {
    console.log(rows);
    const allUsernames = rows.map(e => e.BrandName);
    console.log(allUsernames);
    res.send(allUsernames);
  });
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/users', (req, res) => {
  console.log(req.body);

  db.run(
    'INSERT INTO beximco VALUES ($BrandName,$PharmacyName, $PhoneNo, $Map)',
    // parameters to SQL query:
    {
      $BrandName: req.body.BrandName,
      $PharmacyName: req.body.PharmacyName,
      $PhoneNo: req.body.PhoneNo,
      $Map: req.body.Map,
    },
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({ message: 'error in app.post(/users)' });
      } else {
        res.send({ message: 'successfully run app.post(/users)' });
      }
    }
  );
});


app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above

  // db.all() fetches all results from an SQL query into the 'rows' variable:
  // SELECT beximco.BrandName,squre.BrandName FROM beximco INNER JOIN squre ON beximco.Brand=squre.BrandName
  db.all(
    'SELECT * FROM beximco WHERE BrandName = $BrandName',
    // parameters to SQL query:
    {
      $BrandName: nameToLookup
    },
    // callback function to run when the query finishes:
    (err, rows) => {
      console.log(rows);
      if (rows.length > 0) {
        res.send(rows[0]);
      } else {
        res.send({}); // failed, so return an empty object instead of undefined
      }
    }
  );
});


// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});

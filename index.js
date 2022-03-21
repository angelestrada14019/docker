const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('no se pudo conectar con la base de datos, escriba un nombre correcto: ' + err);
    } else {
      res.send('Me conecté !!');
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))

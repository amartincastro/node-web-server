const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Ariel',
    likes: [
      'Apples',
      'Bananas'
    ]
  });
});


app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling request'
  });
});

// /bad - send back JSON with errorMessage property 'Error handling request'

app.listen(3000);

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(3000,()=>{

    console.log("server listening on port 3000 on localhost");
});
const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Hello Segatto');
});

//Básicamente dizendo para a aplicação ouvir na porta 3001
app.listen(3001);
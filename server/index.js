const express    = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller.js');

const app  = express();
const PORT = 3004;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/sign-in', (req, res) => {
    console.log('Post recieved: ', req.body);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}) 
    

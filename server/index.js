const app        = require('express')();
const http       = require('http').createServer(app);
const bodyParser = require('body-parser');
const controller = require('./controllers/controller.js');

const PORT = 3004;

var io = require('socket.io')(http);

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/sign-in', (req, res) => {
    console.log('Post recieved: ', req.body);
    res.sendStatus(200);
})

io.on('connection', function(socket){
    console.log('a user connected ', socket.id);
})

http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}) 
    

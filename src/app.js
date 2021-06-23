const express = require('express'); //require express
const app = express(); // instanciar express a través de una variable llamada app   
const http = require('http'); //allows to create server
const server = http.createServer(app); // socket.io needs httpServer
const path = require('path'); //will allow to make routes
const engine = require('ejs-mate'); //search engine require
const io = require('socket.io')(server,{ // web socket
    cors: { //allow http requests from an app to another
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
});

require('./DataBase/Conexion');

app.set('views',path.join(__dirname,'Views')); //helps to not considere the / or \ that are used in directions depending on the OS and tells to visit a directory, then 
// __dirname = the actual direction and then the name of where to go
app.engine('ejs',engine); // sets the view engine that will be used
app.set('view engine','ejs'); //view engine establishment
app.use('/Public',express.static(path.join(__dirname,'Public')));
app.use(express.json());
app.use(express.urlencoded({extended : false }));

app.use('/', require('./Routes/Home'));

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('AddtoDo', function (ms){
        io.emit('toDo', ms);
    });

    socket.on('eliminar', function (ms){
        io.emit('eliminarToDo', ms);
    });

    socket.on('UpdateEstado', function (ms){
        io.emit('updateEstado', ms);
    });
});

const port = process.env.PORT || 5001; // initialize port
server.listen(port, '0.0.0.0', function(){ // IP address allows to receive requests from any IP in case that u connect it to a server
    console.log(`Server ON: ${port}`);
});
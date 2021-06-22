const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const engine = require('ejs-mate');
const io = require('socket.io')(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
});

require('./DataBase/Conexion');

app.set('views',path.join(__dirname,'Views'));
app.engine('ejs',engine);
app.set('view engine','ejs');
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

const port = process.env.PORT || 5001;
server.listen(port, '0.0.0.0', function(){
    console.log("Server ON: " + port);
});
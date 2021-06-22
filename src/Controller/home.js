const { query } = require('../DataBase/Conexion');
const mysql = require('../DataBase/Conexion');
const io = require("socket.io-client");
const socket = io("http://127.0.0.1:5001",{
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
});

exports.home = async function(req, res, next){
    mysql.query('select * from lista where 1', (err, rows, fields) =>{
        let listas = [];
        if(!err){
            res.render('Home',{
                lista:rows
            }
            );
        }
        else{
            res.render('home',{
                lista:listas
            }
            );
        }
    });
};

exports.add = async function(req, res, next){
    let {Name, Description, Autor, Estado, Date} = req.body;
    mysql.query('INSERT INTO lista(Name, Description, Autor, Estado, Date) VALUES (?,?,?,?,?)',[Name, Description, Autor, Estado, Date], (err, rows, fields) =>{
        if(!err){
            mysql.query('select * from lista where Description = ? && Date = ?',[Description, Date], (err, rows, fields) =>{
                if(!err){
                    socket.emit('AddtoDo', rows);
                }
            });
            res.status(200).json({mensaje:"Guardado"});
        }
        else{
            res.status(400).json({mensaje:"Error al Guardar"});
        }
    });
};

exports.completar = async function(req, res, next){
    let id = req.params.id;
    let {check} = req.body;
    if(check == 0){
        check = 0;
    }
    else{
        check = 1;
    }
    let datos = {
        id,
        check
    }
    mysql.query('UPDATE lista SET `Estado`=? WHERE id = ?',[check, id], (err, rows, fields) =>{
        if(!err){
            socket.emit('UpdateEstado',datos);
            res.status(200).json({mensaje:"Guardado"});
        }
        else{
            res.status(400).json({mensaje:"Error al Guardar"});
        }
    });
};

exports.delete = async function(req, res, next){
    let id = req.params.id;
    console.log(id);
    mysql.query('DELETE FROM lista WHERE id = ?',[id], (err, rows, fields) =>{
        if(!err){
            socket.emit('eliminar',id);
            res.status(200).json({mensaje:"Eliminado"});
        }
        else{
            res.status(400).json({mensaje:"Error al Eliminar"});
        }
    });
}; 
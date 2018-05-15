const express = require('express');
const app = express();

app.get('/',(req, res) => res.send('Hello Wordl'));
app.get('/quienessomos',(req, res) => res.send('Quienes somos'));

app.get('/hola/:name', (req, res) => {
    var name= req.params.name;
res.send(`hola ${name}`);
});

app.get('/multiplica/:a/:b', (req, res)=>{
var multiplica = req.params.a * req.params.b;
res.send(`multiplica ${multiplica}`);
});

app.get('/esto/:nombre/muy/:nombre2', function (req, res) {
 var nombre = req.params.nombre;
 var nombre2= req.params.nombre2;
 res.send(`esto ${nombre} muy  ${nombre2}`);
});

app.use( (req, res, next) => {
    res.status(404);
    res.json({
      "Ay Ay Ay": "Prueba con otros comandos..."
    });
});
 


app.listen(3000,()=>console.log('Servidor levantado en 3000'));
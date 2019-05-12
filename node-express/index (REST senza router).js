const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
// const hostname = '10.98.2.163';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req,res,next)=>{
    // 'all' viene eseguito per tutti i verbi della route
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();     // continua ad eseguire il codice successivo
                // per la route '/dishes' (per gestire i singoli verbi)
});

app.get('/dishes', (req,res,next)=>{
    res.end('Will send all the dishes to you!');
    // non c'è la chiamata a next() quindi conclude
    // la gestione della get per la route '/dishes'
});
app.post('/dishes', (req,res,next)=>{
    res.end('Will add the dishe: '+ req.body.name + ' with details: ' +
    req.body.description);
});
app.put('/dishes', (req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /dishes');
});
app.delete('/dishes', (req,res,next)=>{
    res.end('Deleting all dishes');
});

app.get('/dishes/:dishId', (req,res,next)=>{
    res.end('Will send details of the dish: '+
    req.params.dishId + ' to you!');
});
app.post('/dishes/:dishId', (req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported on /dishes/ '+
    req.params.dishId);
});
app.put('/dishes/:dishId', (req,res,next)=>{
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});
app.delete('/dishes/:dishId', (req,res,next)=>{
    res.end('Deleting dish: ' + req.params.dishId);
});



app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
    res.status=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

// app.listen(port, () => console.log(`Listening on ${port}`));

const server=http.createServer(app);
server.listen(port, hostname, ()=>{
    console.log(`Server Express running at http://${hostname}:${port}`);
});
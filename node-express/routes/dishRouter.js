const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

//  Root
dishRouter.route('/')
.all((req,res,next)=>{
    // 'all' viene eseguito per tutti i verbi della route
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();     // continua ad eseguire il codice successivo
                // per la route '/dishes' (per gestire i singoli verbi)
})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you!');
    // non c'è la chiamata a next() quindi conclude
    // la gestione della get per la route '/dishes'
})
.post((req,res,next)=>{
    res.end('Will add the dishe: '+ req.body.name + ' with details: ' +
    req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next)=>{
    res.end('Deleting all dishes');
});

// dishId
dishRouter.route('/:dishId')
.all((req,res,next)=>{
    // 'all' viene eseguito per tutti i verbi della route
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();     // continua ad eseguire il codice successivo
                // per la route '/dishes' (per gestire i singoli verbi)
})
.get((req,res,next)=>{
    res.end('Will send details of the dish: '+
    req.params.dishId + ' to you!');
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported on /dishes/'+
    req.params.dishId);
})
.put((req,res,next)=>{
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;
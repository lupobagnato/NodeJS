const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

//  Root
promoRouter.route('/')
.all((req,res,next)=>{
    // 'all' viene eseguito per tutti i verbi della route
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();     // continua ad eseguire il codice successivo
                // per la route '/promotions' (per gestire i singoli verbi)
})
.get((req,res,next)=>{
    res.end('Will send all the promotions to you!');
    // non c'è la chiamata a next() quindi conclude
    // la gestione della get per la route '/promotions'
})
.post((req,res,next)=>{
    res.end('Will add the promotion: '+ req.body.name + ' with details: ' +
    req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req,res,next)=>{
    res.end('Deleting all promotions');
});

// promoId
promoRouter.route('/:promoId')
.all((req,res,next)=>{
    // 'all' viene eseguito per tutti i verbi della route
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();     // continua ad eseguire il codice successivo
                // per la route '/promotions' (per gestire i singoli verbi)
})
.get((req,res,next)=>{
    res.end('Will send details of the promotion: '+
    req.params.promoId + ' to you!');
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported on /promotions/'+
    req.params.promoId);
})
.put((req,res,next)=>{
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting promotion: ' + req.params.promoId);
});

module.exports = promoRouter;
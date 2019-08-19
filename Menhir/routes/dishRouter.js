const express = require('express');
const bodyParser = require('body-parser');
//
const kettleRun = require('../kettleRun');
const jH = require('../jobHandler');
//const kettle_runner = require('../kettle_runner');
//

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

//  Root
dishRouter.route('/')
.all((req,res,next)=>{
    // 'all' viene eseguito per tutti i verbi della route
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain'); //'application/json' 'text/plain'
    next();     // continua ad eseguire il codice successivo
                // per la route '/dishes' (per gestire i singoli verbi)
})
// GET
.get((req,res,next)=>{

    console.log('GET senza Id');
    res.end('GET senza Id: ritornerà intero array JSON dei Jobs' )
    // non c'è la chiamata a next() quindi conclude
    // la gestione della get per la route '/dishes'
})
//POST
.post((req,res,next)=>{
    const echo = 
        'COMANDO: ' + req.body.cmd +'<br>' +
        // 'working_dir: ' + req.body.working_dir +'\n' +
        'rep_name: ' + req.body.rep_name +'\n' +
        'rep_dir: ' + req.body.rep_dir +'\n' +
        'rep_obj: ' + req.body.rep_obj +'\n' +
        'rep_usr: ' + req.body.rep_usr +'\n' +
        'rep_pwd: ' + req.body.rep_pwd ;
    
    console.log(req.body);
    
    kettleRun( req, (msg)=> { 
        // console.log('§router log: \n'+ msg.log);  
        // console.log('§router err: \n'+ msg.err);
        let risposta = {
                echo: echo,
                cmd: req.body.cmd,
                working_dir:  req.body.working_dir,
                rep_name:  req.body.rep_name,
                rep_dir:  req.body.rep_dir,
                rep_obj:  req.body.rep_obj,
                rep_usr:  req.body.rep_usr,
                rep_pwd:  req.body.rep_pwd,
                log: msg.log,
                err: msg.err
            };
            
        res.json(risposta);
    })
    
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
    jH.findJob(req.params.dishId, (err, job)=>{
        if (err) {
            console.log(`dishRouter: findJob(${req.params.dishId}) err.message = ${err.message}`); 
            res.statusCode=404;
            // res.end('GET Id ' + req.params.dishId + err.message);
            // res.status(404).send({error : err.message});            
            res.end(err.message);    
        }
        else {
            console.log(`findJob(${req.params.dishId}) = ${job.name}`); 
            res.json(job);
        };
    });
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
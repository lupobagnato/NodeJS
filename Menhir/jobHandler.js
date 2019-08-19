const jobArray = require('./Jobs_and_Transformations');

function findJob(id, callback){
    var messaggio='ricevuto id ' + id;
    var singleJob = jobArray.find((value)=>{
        return value.id == id;
    });

    if (singleJob) {
        messaggio = 'Trovato: ' + singleJob.name
        console.log(messaggio);
        callback(null, singleJob);
    }
    else {
        errore = new Error('Non esiste Id: ' + id);
        console.log(errore.message);  
        callback(errore);
    }
    
};

function parametersJob(id) {
    console.log('Cerco i parametri del Id: ' + id);
};

exports.findJob = findJob;
exports.parametersJob = parametersJob;

console.log(`modulo : ${module.filename}`);
console.log(module.exports);
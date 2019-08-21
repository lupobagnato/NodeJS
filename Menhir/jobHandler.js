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

function allJobs(callback) {
    console.log('allJobs()');
    callback(null, jobArray)
};

exports.findJob = findJob;
exports.allJobs = allJobs;

console.log(`modulo : ${module.filename}`);
console.log(module.exports);
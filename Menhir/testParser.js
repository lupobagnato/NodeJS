const jobArray = require('./Jobs_and_Transformations');
const selectedID = 9;


// ricerca del Job nell'elenco
var singleJob = jobArray.find((value)=>{
    return value.id == selectedID;
});

if (singleJob) {
    console.log(singleJob.name);
    if (singleJob.pdi_par) {
        console.log(singleJob.pdi_par);        
        for (var k in singleJob.pdi_par) {
            //console.log(k,singleJob.pdi_par[k]);
            console.log(' -param='+k+'='+singleJob.pdi_par[k]); 
        } 
    }
    
}
else console.log('ID non esiste');
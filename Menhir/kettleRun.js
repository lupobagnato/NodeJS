const { spawn } = require('child_process');


function kettleRun(req, callback){
    
    const cmd = req.body.cmd;
    const working_dir = req.body.working_dir;

    const rep_name ='-rep=' + req.body.rep_name;
    const rep_dir ='-dir=' + req.body.rep_dir;
    const rep_obj ='-trans=' + req.body.rep_obj;
    const rep_usr ='-user=' + req.body.rep_usr;
    const rep_pwd ='-pass=' + req.body.rep_pwd;
    const param1 =' -param=anno=2019'; 
    const param2 =' -param=mese=09';

    let run_log = '' //cmd + working_dir;
    let err_log = '' //rep_dir+rep_obj;

    

    const kettle_call = [rep_name, rep_dir, rep_obj, rep_usr, rep_pwd, param1, param2];

    // ***** CallBack di test, senza eseguire Kettle *****
    let messaggio = {
        log: param1+param2,
        err: err_log
    };
    callback(messaggio);
    // ***************************************************


    // const cmd_line = spawn(cmd, kettle_call, {cwd:working_dir });    
  
    // cmd_line.on('exit', (code) => { 
    //     console.log(`§§§ runKettle exited with code ${code} §§§`);
    // });  

    // cmd_line.stdout.on('data', (data) => {
    //     console.log('# blocco  Start#\n' + data.toString() + '\n# blocco End #\n') ;
    //     run_log += data.toString();
    // });  
    
    // cmd_line.stderr.on('data', (data) => {
    //     console.log('# ERR #\n' + data.toString() + '\n###### #\n') ;
    //     err_log += data.toString();
    // });  
    
    // cmd_line.stdout.on('end', (data) => {
    //     let messaggio = {
    //         log: run_log,
    //         err: err_log
    //     };
    //     callback(messaggio);
    // });
  
}  

module.exports = kettleRun;

console.log(`modulo : ${module.filename}`);
console.log(module.exports);
// console.log(module.id);

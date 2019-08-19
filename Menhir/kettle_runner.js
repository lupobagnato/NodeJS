const { spawn } = require('child_process');

const cmd = './pan.sh';
const working_dir = '/home/pentaho/pdi-ce-8.2.0.0-342/data-integration';

const rep_name ='-rep=' + 'dbRep_PDI_7';
const rep_dir ='-dir=' + 'testBI';
const rep_obj ='-trans=' + 'test Transf';
const rep_usr ='-user=' + 'admin';
const rep_pwd ='-pass=' + 'admin';

const kettle_call = [rep_name, rep_dir, rep_obj, rep_usr, rep_pwd];


function runKettle(callback){
  const cmd_line = spawn(cmd, kettle_call, {cwd:working_dir });
  let run_log = '';
  let err_log = '';

  cmd_line.on('exit', (code) => { 
    console.log(`§§§ runKettle exited with code ${code} §§§`);
  });  

  cmd_line.stdout.on('data', (data) => {
    console.log('# inizio #\n' + data.toString() + '\n# fine #\n') ;
    run_log += data.toString();
  });  
  
  cmd_line.stderr.on('data', (data) => {
    console.log('# ERR #\n' + data.toString() + '\n###### #\n') ;
    err_log += data.toString();
});  
  
  cmd_line.stdout.on('end', (data) => {
      let messaggio = {
        comando: cmd+' '+kettle_call,
        log: run_log,
        err: err_log
      };
      callback(messaggio);
  });
  
}  

module.exports = runKettle;

console.log(`modulo : ${module.filename}`);
console.log(module.exports);
// console.log(module.id);

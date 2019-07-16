const { spawn } = require('child_process');

const working_dir = '/home/pentaho/pdi-ce-8.2.0.0-342/data-integration';
const cmd = './pan.sh';

const rep_name ='-rep=' + 'dbRep_PDI_7';
const rep_dir ='-dir=' + 'testBI';
const rep_obj ='-trans=' + 'test Transf';
const rep_usr ='-user=' + 'admin';
const rep_pwd ='-pass=' + 'admin';

const kettle_call = [rep_name, rep_dir, rep_obj, rep_usr, rep_pwd];
const cmd_line = spawn(cmd, kettle_call, {cwd:working_dir });


cmd_line.stdout.on('data', (data) => {
  console.log(data.toString());
});

cmd_line.stderr.on('data', (data) => {
  console.log(data.toString());
});

cmd_line.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});
const { spawn } = require('child_process');

const working_dir = '/home/pentaho/pdi-ce-8.2.0.0-342/data-integration';
const command = './pan.sh';

const rep_name ='-rep=' + 'dbRep_PDI_7';
const rep_dir ='-dir=' + 'testBI';
const rep_obj ='-trans=' + 'test Transf';
const rep_usr ='-user=' + 'admin';
const rep_pwd ='-pass=' + 'admin';

const kettle_call = [rep_name, rep_dir, rep_obj, rep_usr, rep_pwd];
// const kettle_call = [`-rep=${rep_name}`, `-dir=${rep_dir}`, `-trans=${rep_obj}`, `-user=${rep_usr}`, `-pass=${rep_pwd}`];

const bat = spawn(command, kettle_call, {cwd:working_dir });
// const bat = spawn(command, ['-rep=dbRep_PDI_7', '-user=admin', '-pass=admin', '-listdir=Y'], {cwd:working_dir });

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.log(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});
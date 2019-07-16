
const { spawn } = require('child_process');

const working_dir = 'C:\\Pentaho\\pdi-ee-client-7.1.0.0-12\\data-integration';
const command = 'cmd.exe';

const rep_name ='dbRep_PDI_7';
const rep_dir ='testBI';
const rep_obj ='test_Transf';
const rep_usr ='admin';
const rep_pwd ='admin';

const bat = spawn(command, ['/c',`call Pan /rep:${rep_name} /dir:${rep_dir} /trans:${rep_obj} /user:${rep_usr} /pass:${rep_pwd}`], {cwd:working_dir });

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.log(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});
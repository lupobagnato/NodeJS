const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['/c','start_pan.bat'], {cwd: 'C:\\Pentaho\\pdi-ee-client-7.1.0.0-12\\data-integration'});

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.log(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});
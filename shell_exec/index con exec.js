var exec = require('child_process').exec;
var child;
// executes `dir`
child = exec("dird", (error, stdout, stderr) => {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        // console.log('exec error: ' + error);
        console.log(`exec error: ${error}`);
    }
});
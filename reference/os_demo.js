const os =require('os');

//Platform
console.log(os.platform());

//CPU architecture
console.log(os.arch());

//CPU core info
console.log(os.cpus());

//EOL => end of line 
console.log("HARSHI" + os.EOL + "CHAWLA");

//Available parallelism
console.log(os.availableParallelism());

//system specific constants for error code
console.log(os.constants)

//file path of null device
console.log(os.devNull)

//Free memory
console.log(os.freemem())

//total memory
console.log(os.totalmem())

//Home directory
console.log(os.homedir())

//UPtime
console.log(os.uptime())

import os from "os";

// userInfo()
console.log(os.userInfo());

// totalmem()
console.log(os.totalmem());

// freemem()
console.log(os.freemem());

console.log(`Memory Utilization: ${Math.round(((os.freemem() * 100) / os.totalmem) * 100) / 100}%`);

// cpus()
console.log(os.cpus());

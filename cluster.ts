import cluster from "cluster";
import {cpus} from "os";

const numCPUs = cpus().length;
if(cluster.isPrimary){
    console.log (`Number of CPUs : ${numCPUs}`);
    console.log(`Primary ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork();
        worker.on('exit', () => {
            console.log(`Worker ${worker.process.pid} died`);
            cluster.fork();
        });
    }


}
if(cluster.isWorker){
    await import('./server.js')
}
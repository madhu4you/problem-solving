function StopWatch() {
    let startTime, endTime, running, duration = 0;
    
    this.start = function() {
        if(running) 
            throw new Error("Stopwatch is already started");
        running = true;
        startTime = new Date();
    }
    this.stop = function() {
        if(!running)
            throw new Error("Stopwatch is not started yet");
        running = false;
        endTime = new Date();
        const sec = (endTime.getTime() - startTime.getTime()) / 1000 ;
        duration += sec;
    }
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
   Object.defineProperty(this, "duration", {
    get: function() {
        return duration;
    }
   })
}

let sw = new StopWatch();
console.log(sw.duration);
sw.start();
setTimeout(() => {
    sw.stop();
    console.log(sw.duration);
}, 1000);

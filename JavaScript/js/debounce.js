const getData = () => {
    console.log("Fetching Data...");
}

const debounce = (fn, delay) => {
    let timerID; //Initilize the timer
    return function () {
        //Context of the function
        let context = this;
        let args = arguments; //Agruments
        if (timerID) {
            clearTimeout(timerID); //Need to clear timer if we get any other calls with in delay
        }
        timerID = setTimeout(() => {
            timerID = null;
            fn.apply(context, args); //Call the function to execute
        }, delay);
    }
}

const betterGetData = debounce(getData, 300);

const throttle = (fn, wait) => {
    let timerID;
    return function () {
        let context = this;
        let args = arguments;
        if (timerID) { // No need to clear if the timer is already running.
            return;
        }
        setTimeout(() => {
            timerID = null;
            fn.apply(context, args);
        }, wait);
    }
}

const onWait = () => {
    console.log("I am Scrolling Page");
}
const betterCallMethod = throttle(onWait, 300);
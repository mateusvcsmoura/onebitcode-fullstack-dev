console.log("Program started");

// const timeoutId = setTimeout(() => {
//     console.log("1 second since program started");
// }, 1000);

// clearTimeout(timeoutId);

let seconds = 0;

const intervalId = setInterval(() => {
    seconds += 2;
    console.log(`${seconds} seconds has passed`);

    if (seconds > 10) {
        clearInterval(intervalId);
        console.log("running outta time. shutting down.");
    }
}, 2000);

function sendSpaceship(spaceship: { pilot: string, copilot?: string }) {
    return "hello";
}

sendSpaceship({ pilot: "mats", copilot: "jw" });
sendSpaceship({ pilot: "mats" });

let input: any;

input = "mats";
input = 10;
input = [2, 3];

let text: string = "mats";

input = text;
text = input;

function verification(test: boolean) {
    if (test) {
        console.log("true");
    } else {
        let _check: never;
    }
}
function step02() {
    console.log("step 02");
}

console.log("step 01");
step02();
console.log("step 03");
console.log("step 04");

setTimeout(() => {
    console.log("step 05");
}, 2000);

console.log("step 06");
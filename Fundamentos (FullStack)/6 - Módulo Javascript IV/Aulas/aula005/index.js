const a = 0;
const b = null;
const c = "test";
const d = 10;

let x = 0;
let y = x || 42;

console.log(a || b || c);
console.log(b ?? c);
console.log(a ?? c);

console.log({x, y});

y = x ?? 42;

console.log({x, y});

// username = person.name ?? "Admin";


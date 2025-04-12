const person = {
    username: "Mateus",
    job: "Unemployed",
    parents: ["Eliane", "Edison"]
};

const { username, job, parents } = person;
const [ father, mother ] = parents;

console.log(username, job, parents);
console.log(father, mother);

function createUser ({ username, job, parents }) {
    const id = Math.floor(Math.random() * 9999);

    return {
        id, 
        username,
        job,
        parents
    };
};

const mateus = createUser(person);
console.log(mateus);


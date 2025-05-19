function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18);
        } else {
            reject(new Error('age is required'));
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear();
            const currentYear = new Date().getFullYear();

            resolve(currentYear - birthYear);
        } else {
            reject(new Error('birthday is required'));
        }
    })
}

// getAge("2006-08-10").then((age) => {
//     checkAge(age).then((isAdult) => {
//         if (isAdult) {
//             console.log("adult person");
//         } else {
//             console.log("non adult person");
//         }
//     }).catch((e) => {
//         console.log(e.message);
//     });
// }).catch((e) => {
//     console.log(e.message);
// });

getAge("2006-08-10")
    .then(age => checkAge(age)) // return checkAge(age) that returns true if is over 18 and false if isnt over 18
    .then((isAdult) => {
        if (isAdult) {
            console.log("adult person");
        } else {
            console.log("non adult person");
        }
    }
    )
    .catch(e => console.log(e.message));

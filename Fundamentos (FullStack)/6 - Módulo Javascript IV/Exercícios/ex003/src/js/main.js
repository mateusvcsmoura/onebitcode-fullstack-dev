import '../styles/index.css';

const username = window.prompt("Enter username");

if (username) {
    window.alert(`Hello, ${username}!`);
} else {
    window.alert("Hello, User!");
}


import dotenv from 'dotenv';
dotenv.config();
const token = process.env.GITHUB_TOKEN;
let users = [];
const findUser = (targetUser) => {
    const user = users.find(u => u.login === targetUser);
    return user ?? false;
};
function saveUser(user) {
    if (!findUser(user.login)) {
        const { id, login, name, bio, public_repos, repos_url } = user;
        users.push({ id, login, name, bio, public_repos, repos_url });
    }
}
function extractUserRepos(repos) {
    let userRepos = [];
    repos.forEach(repo => {
        const { id, name, description, fork, stargazers_count } = repo;
        userRepos.push({ id, name, description, fork, stargazers_count });
    });
    return userRepos;
}
function showAllUsers() {
    let message = "";
    if (users.length > 0) {
        message += "Users\n\n";
        users.forEach(user => {
            message += `User: ${user.login}\nName: ${user.name}\nID: ${user.id}\nBio: ${user.bio}\nPublic Repositories: ${user.public_repos}\nRepositories URL: ${user.repos_url}\n\n`;
        });
        console.log(message);
        return message;
    }
    else {
        message += "No Users registered in database";
        console.log(message);
        return message;
    }
}
function getTopUsers() {
    if (users.length > 0) {
        const sortedUsers = users.sort((a, b) => b.public_repos - a.public_repos);
        let message = "Top Users\n\n";
        sortedUsers.forEach(user => {
            message += `Username: ${user.login}\nPublic Repositories: ${user.public_repos}\n\n`;
        });
        console.log(message);
        return message;
    }
    else {
        return "there's no users in database";
    }
}
async function showUserInfo(targetUser) {
    const user = findUser(targetUser);
    if (!user) {
        console.log("User is not registered in our database...");
        return;
    }
    let message = `User Name: ${user.name}\nID: ${user.id}\nLogin: ${user.login}\nBio: ${user.bio}\nRepositories\n\n`;
    const userRepos = await getUserRepos(2, user); // first param is the number of repos you want to fetch
    userRepos?.forEach(repo => {
        message += `Repository: ${repo.name}\nRepository ID: ${repo.id}\nRepository Description: ${repo.description}\nRepository Fork: ${repo.fork}\nRepository Stars: ${repo.stargazers_count}\n\n`;
    });
    console.log(message);
    return;
}
async function getUserRepos(targetQuantity, user) {
    const url = `https://api.github.com/users/${user.login}/repos`;
    try {
        const headers = {
            Authorization: `token ${token}`
        };
        const response = await fetch(url, { headers });
        const data = await response.json();
        if (!Array.isArray(data)) {
            console.log("Unexpected response from GitHub:", data);
            return;
        }
        if (data.length < 1) {
            console.log("user does not have any public repositories.");
            return;
        }
        else if (data.length < targetQuantity) {
            console.log(`${user.login} only has ${user.public_repos} public repositories.`);
            const repos = extractUserRepos(data);
            return repos;
        }
        else {
            const repos = extractUserRepos(data.slice(0, targetQuantity));
            return repos;
        }
    }
    catch (e) {
        console.log(`error while trying to fetch user repos: ${e}`);
    }
}
async function getUser(username) {
    const url = `https://api.github.com/users/${username}`;
    try {
        const headers = {
            Authorization: `token ${token}`
        };
        const response = await fetch(url, { headers });
        const data = await response.json();
        if (data.message) {
            console.log(`Username: ${username}\n${data.status} - ${data.message}`);
            return null;
        }
        saveUser(data);
        return data;
    }
    catch (e) {
        console.log(`error trying to fetch username data: ${e}`);
        return null;
    }
}
async function main() {
    await getUser("mateusvcsmoura");
    await getUser("thomasdacosta");
    await getUser("Vitoria-Alejandra");
    await showUserInfo("mateusvcsmoura");
    showAllUsers();
    getTopUsers();
    console.log(users);
}
main();

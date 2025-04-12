document.querySelector('#sessionBtn').addEventListener('click', function () {
    const input = document.querySelector('#session');
    window.sessionStorage.setItem('info', input.value);
    input.value = '';
});

document.querySelector('#readSession').addEventListener('click', function () {
    const info = window.sessionStorage.getItem('info');
    window.alert(`Informação salva: ${info}`);
});

document.querySelector('#localBtn').addEventListener('click', function () {
    const input = document.querySelector('#local');
    window.localStorage.setItem('text', input.value);
    input.value = '';
});

document.querySelector('#readLocal').addEventListener('click', function () {
    const text = window.localStorage.getItem('text');
    window.alert(`Informação salva: ${text}`);
});

document.querySelector('#cookieBtn').addEventListener('click', function () {
    const input = document.querySelector('#cookie');
    
    const cookie = 'info=' + input.value + ';';
    const expires = 'expires=' + new Date(2027, 19, 3) + ';';
    const path = 'path=/';

    document.cookie = cookie + expires + path;

    console.log(document.cookie);
});

document.querySelector('#cookie2Btn').addEventListener('click', function () {
    const input = document.querySelector('#cookie2');
    
    const cookie = 'text=' + input.value + ';';
    const expires = 'expires=' + new Date(2027, 3, 23) + ';';
    const path = 'path=/';

    document.cookie = cookie + expires + path;

    console.log(document.cookie);
});


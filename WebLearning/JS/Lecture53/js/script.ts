// DOM manipulation
// console.log(document.getElementById('title'));
//
// console.log(document instanceof HTMLDocument);

function sayHello() {
    const name = document.getElementById("name").value;
    const message = `<h2>Hello ${name}!</h2>`;

    // document.getElementById('content').textContent = message;

    document.getElementById('content').innerHTML = message;

    if (name === 'student') {
        const title = document.querySelector('#title').textContent;
        title += ` & Loving it!`;
        document.querySelector('#title').textContent = title;

    }
}
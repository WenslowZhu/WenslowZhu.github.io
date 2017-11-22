
document.addEventListener('DOMContentLoaded', function (event) {
    function sayHello(event) {
        console.log(this);
        const name = document.getElementById("name").value;
        const message = `<h2>Hello ${name}!</h2>`;

        document.getElementById('content').innerHTML = message;

        if (name === 'student') {
            const title = document.querySelector('#title').textContent;
            title += ` & Loving it!`;
            document.querySelector('#title').textContent = title;
        }
    }

    document.querySelector('button').addEventListener('click', sayHello);
});


// document.querySelector('button').onclick = sayHello;
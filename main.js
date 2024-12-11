var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hola Mundo!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Aquí el código nunca se detiene...')
    .pauseFor(2000)
    .deleteChars(3)
    .typeString(', ')
    .typeString('<strong>espero que tu conexión tampoco :)</strong>')
    .pauseFor(2500)
    .start();
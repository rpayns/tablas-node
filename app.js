const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");

//console.log(argv);


crearArchivo(argv)
    .then((nombreArchivo) => console.log(nombreArchivo,"creado"))
    .catch((err) => console.log(err))

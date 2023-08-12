const fs =  require("fs");
const colors = require("colors");

const crearArchivo = async({base = 5,listar = false, hasta = 10}) =>{

    let salida = ``;
    let path = `./salida/tabla-${base}.txt`

    for(let i = 1; i <= hasta; i++){

         salida +=`${base} x ${i} = ${base*i}\n`;
    };

    if(listar){
        console.log("====================".blue)
        console.log(`  TABLA DEL ${base}`.bgWhite.black)
        console.log("====================".blue)
        console.log(salida.bgMagenta);
    }

    try {
        fs.writeFileSync(path,salida);
        return path;
        
    } catch (error) {
        throw error
        
    }


}


module.exports = {
    crearArchivo : crearArchivo
};
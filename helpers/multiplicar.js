
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
    try{
        let salida = '';
        let consola = '';   

        console.clear();
        console.log('=================='.green);
        console.log(`${'TABLA DEL'.green}  ${colors.blue(base)}`);
        console.log('=================='.green);


        for (let i = 1; i <= hasta; i++){
            salida += `${base} 'X' ${i} '=' ${base * i}\n`;
            consola += `${base} ${'X'.yellow} ${i} ${'='.yellow} ${base * i}\n`;
        }

        if (listar)
            console.log(consola);

        fs.writeFileSync(`./salida/tabla-del-${base}.txt`,salida);
        return `tabla-del-${base}.txt creado.`;
    }catch(err){
        throw `Archivo de la tabla-del-${base}.txt No pudo ser creado.`;
    }
}

module.exports = {
    crearArchivo
}
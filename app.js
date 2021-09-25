
// const fs = require('fs');
// let salida = '';

// const base = 5;

// console.clear();
// console.log('==================');
// console.log(`TABLA DEL ${base}`);
// console.log('==================');


// for (let i = 1; i <= 10; i++){
//     salida += `${base} X ${i} = ${base * i}\n`;
// }

// console.log(salida);

// // fs.writeFile(`tabla-del-${base}.txt`,salida,(err)=>{
// //     if(err) throw err;

// //     console.log(`tabla-del-${base}.txt creado.`);
// // })

// fs.writeFileSync(`tabla-del-${base}.txt`,salida);
// console.log(`tabla-del-${base}.txt creado.`);


//--------------------

// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = '5'] = arg3.split('='); 

// //const base = 5;
// const { crearArchivo } = require('./helpers/multiplicar');



// crearArchivo(base)
//     .then( archivo => console.log(archivo))
//     .catch( err => console.log(err));



const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

crearArchivo(argv.b,argv.l,argv.h)
    .then( archivo => console.log(archivo.rainbow))
    .catch( err => console.log(err));

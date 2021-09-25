const yargs = require('yargs');

const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    defaultDescription: true,
    describe: 'Es la base para multiplicar'
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Numéro hasta el cual se debe multiplicar'
})
.check( (argv,options) =>{
    if (isNaN(argv.b)){
        throw 'La base tiene que ser un numero';
    }
    return true;
})
.argv;

module.exports = argv;
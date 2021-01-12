const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./to-do/por-hacer');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log('Listar por hacer');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no es reconocido');
}
const argv = require('yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        break;
    case 'listar':
        console.log('Listar por hacer');
        break;
    case 'actualizar':
        console.log('Actualizar por hacer');
        break;
    default:
        console.log('Comando no es reconocido');
}
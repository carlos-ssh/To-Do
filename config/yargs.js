const argv = require('yargs')
    .command('crear', 'Genera una nueva tarea.', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('Actualiza', 'Actualiza una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea.'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
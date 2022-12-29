
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    default: false,
    type: "boolean",
    describe: "Muestra la tabla en consola",
  })
  .option('h', {
    alias: 'hasta',
    default: false,
    type: 'number',
    demandOption: 'true',
    describe: 'Muestra tablas menores al numero'
  })
  .check((argv, options) => {
     if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    } 
    if( argv.h < argv.b ){
      throw 'h debe de ser mayor a la base'
    } 
    return true;
  }).argv;

//hasta
  module.exports = argv;
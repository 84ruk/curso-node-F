const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();


/*   .check((argv, options) => {
    if(argv.l){
      
    } else{
      
    }
  }) */
  crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.underline.red, "creado"))
  .catch((err) => console.log(err));

  //option lll
  //listar allias
  //boolean tipo
  //opciobal
  //default false
  //false no consolelog




/* console.log("base: yargs", argv.base);
 */
/* const [, , arg3 = 'base=5'] = process.argv;s
const [ , base = 5 ] = arg3.split("=");
console.log( base );
 */



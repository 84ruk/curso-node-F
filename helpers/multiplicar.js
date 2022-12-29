const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 1, l, h = 2 ) => {


        try{

        let salida = '';
        let consola = '';
    
        const nombreArchivo = `tabla-hasta${h}.txt`;

        for(let i = 1; i <= h; i++){

            
            
            for (let x = 1; x <= 10; x++) {
                salida += (`${ colors.green(i)} ${'x'.red} ${colors.green(x)} ${'='.green} ${colors.blue(i * x)}\n`);
                consola += (`${i} x ${x} ${'= '}${i * x}\n`);
                
            }
            

        }

        {l ? 
            console.log(salida )
            
            
            : null}
        fs.writeFileSync( `./salida/${nombreArchivo}.txt`, consola );

        return `tabla-${ h }.txt`
            
        }catch{
            throw err;
        }
    

}

/* for (let i = 1; i <= 10; i++) {
    
    salida += (`${ colors.green(base)} ${'x'.red} ${colors.green(i)} ${'='.green} ${colors.blue(base * i)}\n`);

} */

module.exports = {
    crearArchivo
}

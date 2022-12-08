  const fs = require('fs');
 
 const path = require('path');
 let destino = path.resolve(__dirname,'data/tareas.json');
 console.log(__dirname);
 
 let data = fs.readFileSync('./data/tareas.json');
  
let dataDescomprimida = JSON.parse(data);
//console.log (dataDescomprimida);

switch (process.argv[2]){
  case 'listar':
    listar ();
  break;
  case undefined:
console.log(`Atencion-Tienes que pasar a una accion\n las acciones disponibles son : listar`);

  break;
  default:
  console.log(`No entiendo que quieres hacer\n las acciones disponovles son : listar `);
  
  break;
}
function listar(){
  console.log('listado de tareas ');
  console.log('--------------------')
dataDescomprimida.forEach((element, i) => {
   console.log( `${i + 1}. ${element.titulo} - ${element.estado}`);


});

}
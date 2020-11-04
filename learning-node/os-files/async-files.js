const fs = require('fs');

const file = process.argv[2]; // leemos el nombre del vector de argumentos -> lo que se escribe en la consola

if (!file) {
  throw new Error('Debes indicar el archivo que quieres leer');
}

const content = fs.readFile(file, (err, content) => {

  if (err) {
    console.log('error', err);
  }

  const lines = content.toString().split('\n').length;
  console.log(lines);
});
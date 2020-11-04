const fs = require('fs');

try {
  const file = process.argv[2]; // leemos el nombre del vector de argumentos -> lo que se escribe en la consola

  const content = fs.readFileSync(file).toString();

  const lines = content.split('\n').length;
  console.log(lines);
} catch (error) {
  console.log('error', error);
}


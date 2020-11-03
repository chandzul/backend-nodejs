const { Transform } = require('stream');

const toCamelCase = new Transform({
  transform(chunk, encoding, callback) {
    const data = chunk.toString();

    data.split(" ").map( (word, index) => {
      // this.push(word.charAt(0).toUpperCase() + word.slice(1)); // UpperCamelCase
      this.push( index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)); // lowerCamelCase
    });

  }
});

process.stdin.pipe(toCamelCase).pipe(process.stdout);
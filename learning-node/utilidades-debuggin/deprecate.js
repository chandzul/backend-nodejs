const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('Hello pluto');
}, 'pluto is deprecated. It\'s not a planet anymore');

helloPluto();
const EventEmiter = require('events');

class Logger extends EventEmiter {
  execute(cb) {
    console.log('Before');
    this.emit('get-api');
    this.emit('start');
    cb();
    this.emit('finish');
    console.log('After');
  }
}

const logger = new Logger();

logger.on('start', () => console.log('Starting'));
logger.on('finish', () => console.log('Finishing'));
logger.on('finish', () => console.log('It\'s Done'));
logger.on('start', () => {
  const min = 2;
  console.log('New Starting', min);
  return min;
});

logger.on('get-api', () => {
  console.log('trae el index de la api antes de todo');
});



logger.execute(() => console.log('callbak de execute'));
// logger.execute(() => setTimeout(() => { console.log('callbak de execute'); }, 500));
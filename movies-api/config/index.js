require('dotenv').config();

const config = {
    dev: process.env.NODE_EMV !== 'production',
    port: process.env.PORT || 3000
};

module.exports = { config };
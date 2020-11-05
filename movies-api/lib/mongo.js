// const { MongloClient, ObjectId } = require('mongodb');
const { MongloClient } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongloClient(MONGO_URI, { useNewUrlParser: true })
    this.dbName = DB_NAME;
  }

  // patron singleton
  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect( err => {
          if (err) {
            reject(err);
          }

          console.log('Connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }
}

module.exports = MongoLib;
const mongoose = require('mongoose');
const util = require("util");

// config should be imported before importing any other file
import config from "../config/config";
const app = require("./express");

const debug = require("debug")("Zidoary:index");

// make bluebird default Promise
// eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose

// connect to mongo db
// const mongoUri = config.mongo.host;
// mongoose
//   .connect(mongoUri, {
//     useNewUrlParser: true
//   })
//   .then(db => console.log(`${URI} is connected`))
//   .catch(err => console.log(`Error en Mongo: ${err}`));

// // print mongoose logs in dev env
// if (config.mongooseDebug) {
//   mongoose.set("debug", (collectionName, method, query, doc) => {
//     debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
//   });
// }

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, error => {
    if (error) console.log("Error on server: ", err);
    else console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

module.exports = app;

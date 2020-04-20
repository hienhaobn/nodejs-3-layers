const express = require('express');
const bodyParser = require('body-parser');

const AttributeRouter = require('./src/routers/attribute.router');
const Logger = require('./src/middlewares/logger.middleware');
const MongoHelper = require('./src/helper/mongo/connect');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(Logger.LoggerMiddleware);

app.listen(port, async (error) => {
  if(error) console.info(error);
  else {
    console.info(`Connected server port ${port} `);
    try {
      await MongoHelper.connect('mongodb://localhost:27017/fashiv2');
      console.info('Connected to mongodb');
    } catch(err) {
      throw new Error(err);
    }
  }
});

app.use(AttributeRouter);
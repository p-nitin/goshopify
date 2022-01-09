const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const indexRouter = require('./routes/index');

const ordersRouter = require('./routes/orders');
const productsRouter = require('./routes/products');

require('dotenv').config({ path: 'config.env' })

const app = express();
const port = process.env.PORT

const swaggerOptions = {
  swaggerDefinition:{
    info:{
      title:"GoShopify API",
      version: '1.0.0',
      description: "This API demonstrates how to integrate with Shopify Admin API using Node JS backend",
      contact:{
        name: "Nitin",
        email: "nitin@hyperthought.in"
      },
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },  
      servers:["http://localhost:3001"]
    }

  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// starting the server
app.listen(port, () => {
    console.log('listening on port:' + port);
  });
  
module.exports = app;

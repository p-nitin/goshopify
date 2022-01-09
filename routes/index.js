var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GoShopify', description: "This API demonstrates the integration with Shopify Admin API" ,
  url: "https://springback-store.myshopify.com/"
  });
});

module.exports = router;

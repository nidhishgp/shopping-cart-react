var express = require('express');
var router  = express.Router();
var fs      = require('fs');

router.get('/products', function(req, res, next){
  let limit  = req.query.limit  || 8,
      page   = req.query.page   || 1,
      offset = (limit * page) - limit;
  fs.readFile(__dirname + '/../data/products.json', (error, data) => {
    if (error) throw error;
    let result = JSON.parse(data);
    res.send({
      products: result.slice(offset, offset + limit),
      end: result.length <= (offset + limit)
    });
  });
});

module.exports = router;

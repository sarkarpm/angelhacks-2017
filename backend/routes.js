const express = require('express');
const router = express.Router();
var models = require('./models');
var User = models.User;
var FoodProvider = models.FoodProvider;
var Item = models.Item;

router.get('/providers', (req, res) => {
  FoodProvider.find({}, (err, providers) => {
    if (err) {
      res.json({success: false, message: err});
    }
    else if (!providers) {
      res.json({success: false, message: "No providers found"});
    }
    else {
      res.json({success: true, providers: providers});
    }
  })
})

router.post('/providers', (req, res) => {
  var newProvider = new FoodProvider ({
    name: req.body.name,
    location: req.body.location,
    type: req.body.type
  })
  newProvider.save((err, providers) => {
    if (err) {
      console.log("error posting provider", err);
      res.json({success: false, message: err});
    }
    else {
      res.json({success: true, providers: providers});
    }
  })
})

router.get('/providers/:providerId', (req, res) => {
  FoodProvider.findById(req.params.providerId, (err, provider) => {
    if (err) {
      res.json({success: false, message: err});
    }
    else if (!provider) {
      res.json({success: false, message: "No provider found"});
    }
    else {
      res.json({success: true, provider: provider});
    }
  })
})

router.get('/items', (req, res) => {
  Item.find({}, (err, items) {
    if (err) {
      res.json({success: false, message: err});
    }
    else if (!items) {
      res.json({success: false, message: "No items found"});
    }
    else {
      res.json({success: true, items: items});
    }
  })
})

router.post('/items/new', (req, res) => {
  var newItem = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    unit: req.body,unit,
    price: req.body.price,
    description: req.body.description
  })
  newItem.save((err, item) => {
    if (err) {
      res.json({success: false, message: err});
    }
    else {
      res.json({success: true, item: item});
    }
  })
})

module.exports = router;

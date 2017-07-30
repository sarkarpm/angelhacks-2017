const express = require('express');
const router = express.Router();
var models = require('./models');
var User = models.User;
var FoodProvider = models.FoodProvider;
var Item = models.Item;

router.get( '/providers', ( req, res ) => {
    FoodProvider.find( {}, ( err, providers ) => {
        if ( err ) {
            res.json( { success: false, message: err } );
        }
        else if ( !providers ) {
            res.json( { success: false, message: "No providers found" } );
        }
        else {
            res.json( { success: true, providers: providers } );
        }
    } )
} )

router.post( '/providers', ( req, res ) => {
    var newProvider = new FoodProvider( {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        location: req.body.location,
        phone: req.body.phone,
        geocode: req.body.geocode,
        type: req.body.type,
        intervalAvailable: [req.body.start,  req.body.end]
    } )
    newProvider.save(( err, providers ) => {
        if ( err ) {
            console.log( "error posting provider", err );
            res.json( { success: false, message: err } );
        }
        else {
            console.log("posted restaurant")
            res.json( { success: true, providers: providers } );
        }
    } )
} )

router.get( '/providers/:providerId', ( req, res ) => {
    FoodProvider.findById( req.params.providerId, ( err, provider ) => {
        if ( err ) {
            res.json( { success: false, message: err } );
        }
        else if ( !provider ) {
            res.json( { success: false, message: "No provider found" } );
        }
        else {
            res.json( { success: true, provider: provider } );
        }
    } )
} )

router.get( '/users/:userId', ( req, res ) => {
    User.findById( req.params.userId, ( err, user ) => {
        if ( err ) {
            res.json( { success: false, message: err } );
        }
        else if ( !user ) {
            res.json( { success: false, message: "No user found" } );
        }
        else {
            res.json( { success: true, user: user } );
        }
    } )
} )

router.post('/newOrder', ( req, res ) => {
  console.log('BEYONCE', req.body.userId)
    User.findById( req.body.userId, ( err, user ) => {
        if ( err ) {
          console.log('BEY')
            res.json( { success: false, message: err } );
        }
        else if ( !user ) {
            res.json( { success: false, message: "No user found" } );
        }
        else {
            console.log('MINH TO')
            user.orders.push({name: req.body.name,
              quantity: req.body.quantity,
              price: req.body.price,
              unit: req.body.unit,
              provider: req.body.provider
            })
            user.save();
            res.json( { success: true, user: user } );
        }
    } )
} )

router.get( '/providers/:providerId/items', ( req, res ) => {
    FoodProvider.findById( req.params.providerId )
        .populate( 'forSale' )
        .exec(( err, provider ) => {
            if ( err ) {
                res.json( { success: false, message: err } );
            }
            else if ( !provider ) {
                res.json( { success: false, message: "No provider found" } );
            }
            else {
                res.json( { success: true, provider: provider } );
            }
        } )
} )

router.post( '/providers/:providerId/new-item', ( req, res ) => {
    var newItem = new Item( {
        name: req.body.name,
        quantity: req.body.quantity,
        unit: req.body.unit,
        price: req.body.price,
        description: req.body.description,
        store: req.params.providerId
    } )
    newItem.save()
        .then( item => {
            FoodProvider.findById( req.params.providerId )
                .then( provider => {
                    var newForSale = [...provider.forSale];
                    newForSale.push( item._id );
                    // Push the item id into the community items array then update in database
                    provider.update( { forSale: newForSale } )
                        .then( result => {
                            provider.items = newForSale;
                            console.log( "You posted an item for your restaurant!" );
                            // Send back the community json object with the updated array
                            return res.json( { success: true, response: provider } );
                        } );
                } );
        } )
        .catch( err => {
            console.log( err );
            return res.json( { success: false, message: err } );
        } );
} )

router.get('/providers/:itemId/remove-item', (req, res) => {
  console.log('taylor swift', req.params.itemId)
  Item.findById(req.params.itemId, (err, item) => {
    if (err) {
      res.json({success: false, message: err});
    }
    else if (!item) {
      res.json({success: false, message: "No item found"});
    }
    else {
     console.log('POROPEPOGE')
      item.quantity = (parseInt(item.quantity - 1)).toString();
      item.save((err) => console.log('updating', err));
      console.log(item);
      res.json({success: true, item: item});
    }
  })
})

router.post('/providers/:providerId/new-item', (req, res) => {
  var newItem = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    unit: req.body.unit,
    price: req.body.price,
    description: req.body.description
  })
  newItem.save()
  .then(item => {
    FoodProvider.findById(req.params.providerId)
    .then(provider => {
        var newForSale = [...provider.forSale];
        newForSale.push(item._id);
        // Push the item id into the community items array then update in database
        provider.update({forSale: newForSale})
        .then(result => {
          provider.items = newForSale;
          console.log("You posted an item for your restaurant!");
          // Send back the community json object with the updated array
          return res.json({success: true, response: provider});
        });
    });
  })
  .catch(err => {
    console.log(err);
    return res.json({success: false, message: err});
  });
})

router.post( '/providers/:providerId/delete-items', ( req, res ) => {
  console.log('ITEM ID', req.body.itemId);
  console.log('PROVIDER ID',req.params.providerId);
    Item.findByIdAndRemove( req.body.itemId )
    .then(item => {
      FoodProvider.findById( req.params.providerId )
        .then( provider => {
            var newForSale = provider.forSale.filter( item => item._id !== req.body.itemId );
            provider.update({$set: {provider: newForSale}});
            res.json( { success: true, provider: provider } );
        } )
    } )
    .catch( err => res.json( { success: false } ) )
})


module.exports = router;

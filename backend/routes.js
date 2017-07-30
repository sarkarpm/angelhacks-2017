const express = require( 'express' );
const router = express.Router();
var models = require( './models' );
var User = models.User;
var FoodProvider = models.FoodProvider;

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

router.post('/geocode', (req, res) => {
    console.log("GEO", req.body.geocode);
    FoodProvider.findById(req.body.providerid, (err, provider) => {
        console.log(provider);
        provider.geocode = req.body.geocode;
        console.log(req.body.geocode);
        provider.save((err, response) => {
            res.json({success: true})
        })
        .catch(err => res.json({success: false}))
    })
})

router.post( '/providers', ( req, res ) => {
    var newProvider = new FoodProvider( {
        name: req.body.name,
        location: req.body.location,
        type: req.body.type,
        geocode: req.body.geocode
    } );
    newProvider.save(( err, providers ) => {
        if ( err ) {
            console.log( "error posting provider", err );
            res.json( { success: false, message: err } );
        }
        else {
            res.json( { success: true, providers: providers } );
        }
    } );
} );

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

module.exports = router;

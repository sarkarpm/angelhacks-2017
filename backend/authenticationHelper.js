var passport = require( 'passport' );
var User = require( './models' ).User;
var FoodProvider = require( './models' ).FoodProvider;

function authenticationHelper( app ) {
    //redirect to documents pages
    app.post( '/login', passport.authenticate( 'local' ), function ( req, res ) {
        User.findOne({username: req.body.username}, function(err, usr) {
            console.log('USER', usr);
            if (usr) {
                res.json( { 
                    success: true, 
                    userId: req.user._id, 
                    firstName: usr.firstName, 
                    lastName: usr.lastName 
                } );
            }
            else {
                FoodProvider.findOne({username: req.body.username}, function(err, foodprovider) {
                    res.json( { 
                        success: true, 
                        userId: req.user._id, 
                        name: foodprovider.name
                    } );
                })
            }
        })
        
    } );

    app.post( '/register', function ( req, res ) {
        var usr = new User( {
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        } );
        usr.save();
        res.json( { success: true } );
    } );

    app.get( '/logout', function ( req, res ) {
        req.logout();
        res.json( { success: true } );
    } );
}

module.exports = {
    authenticationHelper
};

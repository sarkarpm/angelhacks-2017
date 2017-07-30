var passport = require( 'passport' );
var LocalStrategy = require( 'passport-local' );
var User = require( './models' ).User;
var FoodProvider = require('./models').FoodProvider;

function passportHelper( app ){
    passport.serializeUser( function ( user, done ) {
        done( null, user._id );
    } );

    passport.deserializeUser( function ( id, done ) {
        User.findById( id, function ( err, user ) {
            done( err, user );
        } );
    } );

    app.use( passport.initialize() );
    app.use( passport.session() );

  // passport strategy
    passport.use( new LocalStrategy( function ( username, password, done ) {
      // Find the user with the given username
        User.findOne( { username: username }, function ( err, user ) {
          // if there's an error, finish trying to authenticate (auth failed)
            if ( err ) {
                //console.log( err );
                return done( err );
            }
            // if passwords do not match, auth failed
            else if ( user && user.password !== password ) {
                //console.log( "wrongpassword", user );
                return done( null, false, { message: 'Incorrect password.' } );
            }
            else if (user && user.password === password) {
                return done( null, user );
            }
            else if (!user) {
                FoodProvider.findOne({username: username}, function(err, foodprovider) {
                    if (err) {
                        console.log("1", err);
                        return done(err);
                    }
                    else if (!foodprovider) {
                        console.log("2");
                        return done( null, false, { message: 'Incorrect username.' } );
                    }
                    else if (foodprovider.password !== password) {
                        console.log("3");
                        return done( null, false, { message: 'Incorrect password.' } );
                    }
                    else {
                        console.log("4");
                        return done( null, foodprovider );
                    }
                })
            }
          
            //console.log( "rightone", user );
          // auth has has succeeded
            
        } );
    }
  ) );
}

module.exports = {
    passportHelper
};

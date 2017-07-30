var mongoose = require( 'mongoose' );
mongoose.connect( process.env.MONGODB_URI );

var userSchema = mongoose.Schema( {
    username: String,
    password: String,
    firstName: String,
    lastName: String
} );

var User = mongoose.model( 'User', userSchema );

module.exports = {
    User: User,
};

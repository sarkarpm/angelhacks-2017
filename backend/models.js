var mongoose = require( 'mongoose' );
mongoose.connect( process.env.MONGODB_URI );

var userSchema = mongoose.Schema( {
  username: String,
  password: String,
  firstName: String,
  lastName: String
} );

var foodProviderSchema = mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

var User = mongoose.model( 'User', userSchema );
var FoodProvider = mongoose.model('FoodProvider', foodProviderSchema);

module.exports = {
    User: User,
    FoodProvider: FoodProvider
};

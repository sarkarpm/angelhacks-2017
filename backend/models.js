var mongoose = require( 'mongoose' );
mongoose.connect( process.env.MONGODB_URI );

var userSchema = mongoose.Schema( {
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  swipes: Number
} );

var itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
})

var foodProviderSchema = mongoose.Schema({
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
  },
  geocode: {
    type: Object
  },
  forSale: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Item'
  }]
});


var User = mongoose.model( 'User', userSchema );
var Item = mongoose.model('Item', itemSchema);
var FoodProvider = mongoose.model('FoodProvider', foodProviderSchema);

module.exports = {
    User: User,
    Item: Item,
    FoodProvider: FoodProvider,
};

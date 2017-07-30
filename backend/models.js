var mongoose = require( 'mongoose' );
mongoose.connect( process.env.MONGODB_URI );

var userSchema = mongoose.Schema( {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    swipes: Number,
    orders: Array
} );

var itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
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
  },
  store: {
    type: String,
    required: true
  }
})

var foodProviderSchema = mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
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
    }],
    imgURL: {
        type: String,
        required: false,
        default: 'http://one-call.ca/wp-content/uploads/2013/08/logo.png'
    },
    description: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    availableNow: {
      type: Boolean,
      required: false
    },
    intervalAvailable: Array
    
} );


var User = mongoose.model( 'User', userSchema );
var Item = mongoose.model( 'Item', itemSchema );
var FoodProvider = mongoose.model( 'FoodProvider', foodProviderSchema );

module.exports = {
    User: User,
    Item: Item,
    FoodProvider: FoodProvider,
};

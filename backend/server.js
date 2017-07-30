const express = require( 'express' );
var bodyParser = require( 'body-parser' );
const app = express();

//handles sockets
const server = require('http').Server(app);

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

//handles serialize, deserialize, local strategy
const passportHelper = require('./passportHelper').passportHelper;
passportHelper(app);

//handles login, register, logout
const authenticationHelper = require('./authenticationHelper').authenticationHelper;
authenticationHelper(app);

server.listen(3000, () => {
    console.log('Server listening on port 3000!');
});

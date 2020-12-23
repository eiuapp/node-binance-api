// const Binance = require( 'node-binance-api' );
// const binance = new Binance();
const Binance = require('../node-binance-api.js');
const binance = new Binance()
// binance.options({
//     APIKEY: 'jaagtngoNITvjOeYiy6BDmmAYhlESfZyqJkUuBXXSQA5WujPj0IIeEps0SK3Xdll',
//     APISECRET: 'yZA0VMbAjaV504exYMcGiTLMjlDCWkHBUPBr5IxzJMTozOMAZ42GhJnvOeXnqF90'
//   // 'APIKEY':'<api key>',
//   // 'APISECRET':'<api secret>'
// });
global.ticker = {};

// Show contents of BTCUSDT ticker object once per second
setInterval( () => {
    if ( !global.ticker.BTCUSDT ) return;
    console.log( global.ticker.BTCUSDT );
    console.log( `BNB ask: ${global.ticker.BTCUSDT.bestAsk} bid: ${global.ticker.BTCUSDT.bestBid}` );
}, 1000 );

// Get 24h price change statistics for all symbols
binance.websockets.prevDay( false, function ( error, obj ) {
    global.ticker[obj.symbol] = obj;
} );

const REQ = require( "request" );
const URL = "https://view.freev2ray.org/";
REQ.get( URL, ( err, _, data ) => {
  if ( err ) {
    return console.log( err );
  }
  let lines = data.split( "\n" );
  for ( let i = 0; i < lines.length; i++ ) {
    let text = lines[ i ];
    if ( text.indexOf( "data-clipboard-text" ) > -1 ) {
      console.log( text.split( '"' )[ 3 ] );
    }
  }
} );


/**
 * http://stackoverflow.com/a/122190/1582182
 */

var deepcopy = function ( obj , dest ) {

	var key ;

	if ( obj === null || typeof( obj ) !== "object" ) {
		return obj ;
	}

	if ( dest === undefined ) {
		dest = obj.constructor() ;
	}

	for ( key in obj ) {
		
		if ( obj.hasOwnProperty( key ) ) {
			dest[key] = deepcopy( obj[key] ) ;
		}

	}

	return dest;

} ;

exports.deepcopy = deepcopy ;

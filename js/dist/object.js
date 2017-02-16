( function ( ) {

'use strict' ;

var definition = function ( exports , undefined ) {


/* js/src/deepcopy.js */

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

/* js/src/iscopy.js */


var iscopy = function ( a , b ) {

	return a === b ;

} ;

exports.iscopy = iscopy ;

/* js/src/isdeepcopy.js */


var isdeepcopy = function ( a , b ) {

	var key ;

	if ( a === null || typeof( a ) !== "object" ) {

		if ( b === null || typeof( b ) !== "object" ) {
			return a === b ;
		}

		else {
			return false ;
		}

	}

	if ( a === b ) {
		return false ;
	}

	for ( key in a ) {

		if ( a.hasOwnProperty( key ) ) {

			if ( b.hasOwnProperty( key ) ) {

				if ( !isdeepcopy( a[key] , b[key] ) ) {
					return false ;
				}

			}

			else {
				return false ;
			}

		}

	}

	for ( key in b ) {

		if ( b.hasOwnProperty( key ) && !a.hasOwnProperty( key ) ) {

			return false ;

		}

	}

	return true ;

} ;

exports.isdeepcopy = isdeepcopy ;

/* js/src/isequivalent.js */


var isequivalent = function ( a , b ) {

	var key ;

	if ( a === b ) {
		return true ;
	}

	if ( a === null || typeof( a ) !== "object" ) {
		return false ;
	}

	for ( key in a ) {

		if ( a.hasOwnProperty( key ) ) {

			if ( b.hasOwnProperty( key ) ) {

				if ( !isequivalent( a[key] , b[key] ) ) {
					return false ;
				}

			}

			else {
				return false ;
			}

		}

	}

	for ( key in b ) {

		if ( b.hasOwnProperty( key ) && !a.hasOwnProperty( key ) ) {

			return false ;

		}

	}

	return true ;

} ;

exports.isequivalent = isequivalent ;

return exports ;
} ;
if ( typeof exports === "object" ) {
	definition( exports ) ;
}
else if ( typeof define === "function" && define.amd ) {
	define( "@aureooms/js-object" , [ ] , function ( ) { return definition( { } ) ; } ) ;
}
else if ( typeof window === "object" && typeof window.document === "object" ) {
	definition( window["object"] = { } ) ;
}
else console.error( "unable to detect type of module to define for @aureooms/js-object") ;
} )( ) ;



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

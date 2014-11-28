

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

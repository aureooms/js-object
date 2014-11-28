

test( "isdeepcopy" , function ( ) {

	var a , b , c ;

	a = {
		a : 1,
		b : [ 1 , 3 ],
		c : { a : 1, b : [ 1, 3 ], c : { a : 1 } },
		d : [ { a : 1, b : [ 1, 3 ], c : { a : 1 } } ]
	} ;

	b = {
		a : 1,
		b : [ 1 , 3 ],
		c : { a : 1, b : [ 1, 3 ], c : { a : 1 } },
		d : [ { a : 1, b : [ 1, 3 ], c : { a : 1 } } ]
	} ;

	c = {};

	ok( !object.isdeepcopy( a , a ) , "a is not a deepcopy of itself" ) ;
	ok( object.isdeepcopy( a , b ) , "b is a deepcopy of a" ) ;
	ok( !object.isdeepcopy( a , c ) , "c is not a deepcopy of a" ) ;

} ) ;

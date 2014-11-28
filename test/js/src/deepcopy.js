

test( "deepcopy" , function ( ) {

	var a , b , c ;

	Object.prototype.xyz = function(){};

	a = {
		0 : 1,
		1 : [ 1 , 3 ],
		2 : { a : 1, b : [ 1, 3 ], c : { a : 1 } },
		3 : [ { a : 1, b : [ 1, 3 ], c : { a : 1 } } ],
		4 : null,
		5 : undefined,
		a : 1,
		b : [ 1 , 3 ],
		c : { a : 1, b : [ 1, 3 ], c : { a : 1 } },
		d : [ { a : 1, b : [ 1, 3 ], c : { a : 1 } } ],
		e : null,
		f : undefined
	} ;

	b = {} ;

	c = b ;

	ok( !object.isdeepcopy( a , b ) , "b is not deepcopy before" ) ;
	ok( !object.isequivalent( a , b ) , "b is not equivalent before" ) ;
	ok( !object.iscopy( a , b ) , "b is not copy before" ) ;
	ok( object.iscopy( b , c ) , "c is copy of b before" ) ;

	b = object.deepcopy( a , b ) ;

	ok( object.isdeepcopy( a , b ) , "b is deepcopy after" ) ;
	ok( object.isequivalent( a , b ) , "b is equivalent after" ) ;
	ok( !object.iscopy( a , b ) , "b is not copy after" ) ;
	ok( object.iscopy( b , c ) , "c is copy of b after" ) ;

	b.z = Math.random() ;

	ok( !object.isdeepcopy( a , b ) , "b is not deepcopy after adding key z" ) ;
	ok( !object.isequivalent( a , b ) , "b is not equivalent after adding key z" ) ;
	ok( !object.iscopy( a , b ) , "b is not copy after adding key z" ) ;
	ok( object.iscopy( b , c ) , "c is copy of b after adding key z" ) ;

	delete b.z ;

	ok( object.isdeepcopy( a , b ) , "b is deepcopy after deleting key z" ) ;
	ok( object.isequivalent( a , b ) , "b is equivalent after deleting key z" ) ;
	ok( !object.iscopy( a , b ) , "b is not copy after deleting key z" ) ;
	ok( object.iscopy( b , c ) , "c is copy of b after deleting key z" ) ;

	b.c.z = Math.random() ;

	ok( !object.isdeepcopy( a , b ) , "b is not deepcopy after adding key z to c" ) ;
	ok( !object.isequivalent( a , b ) , "b is not equivalent after adding key z to c" ) ;
	ok( !object.iscopy( a , b ) , "b is not copy after adding key z to c" ) ;
	ok( object.iscopy( b , c ) , "c is copy of b after adding key z to c" ) ;

	delete b.c.z ;

	ok( object.isdeepcopy( a , b ) , "b is deepcopy after deleting key z to c" ) ;
	ok( object.isequivalent( a , b ) , "b is equivalent after deleting key z to c" ) ;
	ok( !object.iscopy( a , b ) , "b is not copy after deleting key z to c" ) ;
	ok( object.iscopy( b , c ) , "c is copy of b after deleting key z to c" ) ;

	b.a = [1] ;

	ok( !object.isdeepcopy( a , b ) , "b is not deepcopy after replacing content at key a" ) ;
	ok( !object.isequivalent( a , b ) , "b is not equivalent after replacing content at key a" ) ;
	ok( !object.iscopy( a , b ) , "b is not copy after replacing content at key a" ) ;
	ok( object.iscopy( b , c ) , "c is copy of b after replacing content at key a" ) ;

	b.a = 1 ;

	ok( object.isdeepcopy( a , b ) , "b is deepcopy after restoring content at key a" ) ;
	ok( object.isequivalent( a , b ) , "b is equivalent after restoring content at key a" ) ;
	ok( !object.iscopy( a , b ) , "b is not copy after restoring content at key a" ) ;
	ok( object.iscopy( b , c ) , "c is copy of b after restoring content at key a" ) ;

} ) ;

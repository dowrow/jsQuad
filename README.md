jsQuad
======

 Library for quadratic bezier curves management in JavaScript.

How to use jsQuad
=================

jsQuad works with 2D Point objects in the following format:
				
	{
		x: 0,
		y: 1
	}

And with bezier curves in the following format (as an array of 3 anchor points):

	[{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}]
		
jsQuad has two main methods.
The first one returns an array of smooth bezier curves (spline) given points:
			
	jsQuad.getCurves (arrayOfPoints);
			
The second one returns a point given a curve and a time t [0, 1]:

	jsQuad.pointOnCurve(curve, t);

Utils
=====

At the moment jsQuad only provides a helper method:

This method returns the euclidean distance between two Point objects:
 		
	jsQuad.util.distance(a, b);
 		

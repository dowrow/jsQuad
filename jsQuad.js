/**
*
* jsQuad - Library for quadratic bezier curves management in JavaScript
*
* Diego Castaño (Dowrow) 2013
*
**/

jsQuad = (function () {

	// Creates array of smooth quadratic curves (3 points each) given points
	function _getCurves (points) {

		var curve = [],
        	curves = [],
        	lastPoint = points[0];

	    for (var i = 1; i < points.length - 2; i++) {

	        curve = [];

	        curve.push(lastPoint);
	        curve.push(points[i]);
	        lastPoint = {
	            x: (points[i].x + points[i + 1].x) / 2,
	            y: (points[i].y + points[i + 1].y) / 2
	        }
	        curve.push(lastPoint);

	        curves.push(curve);
	    }

	    curve = [];
	    curve.push(lastPoint);
	    curve.push(points[i]);
	    curve.push(points[i+1]);
	    curves.push(curve);

	    return curves;
	}

	function _getQBezierValue(t, p1, p2, p3) {
	    var iT = 1 - t;
	    return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
	}
	
	// Returns the point in time t on give curve 
	// t inside [0, 1]
	function _pointOnCurve (curve, t) {

		var point = {
			x: curve[0].x,
			y: curve[0].y
		};

		if (curve.length < 3 || t < 0 || t > 1) {
			return point;
		}
		// (1-t)^2 * x1 + 2 * (1-t) * t * x2 + t^2 * x3
		point.x = _getQBezierValue(t, curve[0].x, curve[1].x, curve[2].x);
		point.y = _getQBezierValue(t, curve[0].y, curve[1].y, curve[2].y);

		return point;
	}

	return {
		getCurves: _getCurves,
		pointOnCurve: _pointOnCurve
	};

})();

jsQuad.util = (function () {

	function _distance (a, b) {
		return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
	}

	return {
		distance: _distance
	};

})();

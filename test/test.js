// Singleton defined
test("Singleton defined", function () {
    ok(jsQuad !== undefined, "Singleton defined");
});

// getCurves
test("getCurves method works", function () {
    var a = {x: 0, y: 0},
        b = {x: 1, y: 1},
        c = {x: 3, y: 3},
        d = {x: 4, y: 4},
        curves = jsQuad.getCurves([a, b, c, d]);
        
    ok(curves.length === 2, "Two curves spline");
    ok((curves[0][0].x === 0 && curves[0][0].y === 0) &&
        (curves[0][1].x === 1 && curves[0][1].y === 1) &&
        (curves[0][2].x === 2 && curves[0][2].y === 2) &&
        (curves[1][0].x === 2 && curves[1][0].y === 2) &&
        (curves[1][1].x === 3 && curves[1][1].y === 3) &&
        (curves[1][2].x === 4 && curves[1][2].y === 4), "Spline generated");
});

// pointOnCurve
test("pointOnCurve method works", function () {
    var curve = [{x: 0, y: 0}, {x: 0, y: 2}, {x: 1, y: 1}];
    var a = jsQuad.pointOnCurve(curve, 0),
        b = jsQuad.pointOnCurve(curve, 0.5),
        c = jsQuad.pointOnCurve(curve, 1);

    console.log(a, b, c);
    ok(a.x === 0 && a.y === 0, "t = 0");
    ok(c.x === 1 && c.y === 1, "t = 1");
});

// distance
test("distance method works", function () {
    var a = {x: 0, y: 0},
        b = {x: 0, y: 1};

    ok(jsQuad.util.distance(a, a) === 0, "0 distance case");
    ok(jsQuad.util.distance(a, b) === 1, "1 distance case");

});
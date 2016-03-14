//Last updated 3/14/16
//Circle Object
Math.circle = {

}

//Find an arc in a circle.  Note this is an untested function.
Math.circle.findArc = function(c, r) 
{
	//c is the angle in degrees
	//r is radius
	var equation = 2 * Math.PI * r * (c / 360);
	
	return equation;
}

//Finds area of circle
Math.circle.findArea = function(r) 
{
	//r is radius
	return Math.PI * (r * r);
}

//Finds the radius of circle with the area
Math.circle.findRadiusByArea = function(a)
{
	//a is area
	return Math.sqrt(a / Math.PI);
}

//Find the radius of the circle with the circumference
Math.circle.findRadiusByCircum = function(c)
{
	//c is circumference
	return c / 2 / Math.PI;
}

//Finds diameter of circle based off radius
Math.circle.findDiameter = function(r) 
{
	//r is radius
	return n * 2;
}

Math.circle.findCircumference = function(r) 
{
	//r is radius
	return 2 * Math.PI * r;
}

//Finds a missing angle within a circle
Math.circle.findMissingCentralAngle = function()
{
	var total;
	
	for (var i = 0; i< arguments.length; i++) {
		total += ary[i];
	}
	
	return 360 - (total);
}

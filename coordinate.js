//Find the distance between two points
Math.distTwoDimension = function(a, b, x, y) 
{
	//a and b are coords for point 1
	//x and y are coords for point 2
	var abSqr = Math.sqr(a - x);
	var xySqr = Math.sqr(b - y);
	var ans = Math.sqrt(axSqr + bySqr);
	
	return ans;
}

//Law of Cosine
//Makes use of custom cos functions above.
//For finding missing side when 1 angle and 2 sides are known.  (Uses law of cosine)
Math.lawCosSide = function(a, b, d)
{
	//a = side a
	//b = side b
	//d = known angle
	
	var aSqr = a * a; //a squared
	var bSqr = b * b; //b squared
	var abSqr = aSqr + bSqr; //Add squared angle sides together.
	var convD = Math.cosDegrees(d); //Convert angle to degrees.
	
	var secondPart = 2 * a * b * convD; //The second part of the problem.
	
	var equation = abSqr - secondPart; //Equation is main chunk of problem.
	var ans = Math.sqrt(equation); //Answer is square root of output of equation.

	lastAnswer = ans; //The final answer is...
	
	return ans;
}

//Law of cosine for finding angle when all sides are known (Uses law of cos)
Math.lawCosAngle = function(a, b, c)
{
	//a, b and c are all sides.
	
	var aSqr = a * a; //a squared
	var bSqr = b * b; //b squared
	var cSqr = c * c; //c squared
	var firstStep = (aSqr + bSqr - cSqr) / (2 * a * b ); //Add a squared + b squared - c squared to get majority of equation.
	var ans = Math.acosDegrees(firstStep); //Inverse Cosine (Degrees)
	
	lastAnswer = ans; //Answer is in degrees.
	
	return ans; //Returns the answer
}

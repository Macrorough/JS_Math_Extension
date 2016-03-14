//Rounds a number to the specified decimal.
Math.roundToDecimal = function(n, d)
{
	//n is the number getting rounded
	//d is the decimal point getting rounded to. (10 = tenth, 100 = hundreth, 1000 = thousandth, and so on).
	return Math.round(n * d) / d;
}

//Takes 10 to the power of a specified number.
Math.tenToPowerOf = function(n)
{
	//n is the number that 10 is multiplied to the power of.
	return Math.pow(10, n);
}

//COSINE SECTION
//Cosine degree functions.  While JavaScript has a Cosine function, it is in radians.  This is conversion to degrees.
// Custom cos function for degrees opposed to default radian cos.
Math.cosDegrees = function(degrees) //Original label was radians
{
	return Math.cos(degrees / 180 * Math.PI);
};

//Inverse cosine in degrees.
Math.acosDegrees = function(radians)
{
	return Math.acos(radians) * 180 / Math.PI; //Convert radians to 
};


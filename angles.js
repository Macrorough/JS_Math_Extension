Math.radToDeg = function(radians) 
{
	return radians * (180 / Math.PI);
}

//Convert degrees to radians
Math.degToRad = function(degrees) 
{
	return degrees * (Math.PI / 180);
}

Math.degRadConversion = function(n, type) {
	var ans;
	
	//If the conversion should be degrees to radians
	if(type == 0 || type == 'degToRad') { 
		ans = Math.degToRad(n); //Convert n (degrees) to radians
	}
	
	else if(type == 1 || type == 'radToDeg') { //If the conversion should be radians to degrees
		ans = Math.radToDeg(n); //Convert n (radians) to degrees
	}
	
	return ans;
}

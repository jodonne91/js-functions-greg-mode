/*
  This function should accept an array of numbers as a parameter.
  It should return the sum of the members of the array.
*/
function sum (array) {

	var sum = 0;

	for (var i = 0 ; i < array.length ; i++)
	{
		sum += array[i];
	}

	return sum;
  
}

/*
  This function should accept an array of numbers as a parameter.
  It should return the average of the members of the array.
*/
function average (array) {

	return (sum(array)/(array.length));

}
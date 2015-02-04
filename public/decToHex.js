/* 

converts number from 0-15 to hexidecimal value

*/


function hex(num)
{
	if (num >15){
		return null
	}
	
	letters = ['A','B','C','D','E','F']
	if (num > 9)
	{
		return letters[(num-10)];
	}
	return ("" + num);
}

/*

converts larger numbers to hexidecimal using above function

*/

function numToHex(num)
{
	var rem = [];

	var temp = num;

	var i = 0;

	while (temp > 0)
	{
		rem[i] = hex(temp % 16);

		temp = Math.floor(temp/16);

		i++

	}

	return rem.reverse().join("")

}


// console.log(numToHex(24))
// console.log(numToHex(2491))
// console.log(numToHex(333))

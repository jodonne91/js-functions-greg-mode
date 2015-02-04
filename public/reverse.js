/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/

function reverseWord(word) {

	var result = [];
	var arr = word.split("");

	for( var i = 0 ; i < word.length ; i++ )
	{
		result.push(arr.pop());
	}

	return result.join("");

}


/*
  This function should accept a string as a parameter.
  It should..
  - Break up the string into words (words are separated by spaces)
  - Reverse the contents of each word
  - Return a string that contains each reversed word, in order
*/
var reverseSentence = function(sentence) {

	var words = sentence.split(" ");

	for ( var i = 0 ; i < words.length; )
	{
		words[i] = reverseWord(words[i]);
	}

	return words.join(" ");

}
(function () {

// Expecterd result:
// Hello Yaakov
// Good Bye John
// Good Bye Jen
// Good Bye Jason
// Hello Paul
// Hello Frank
// Hello Larry
// Hello Paula
// Hello Laura
// Good Bye Jim 

// Create an array with the names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop though the names
for (var n = 0; n < names.length; n++) {


	// Find first letter of name	
  	var firstLetter = names[n].charAt(0).toLowerCase();

  	// set default speakword to "hello".
  	var speakWord = "Hello";

  	// if the name starts with a J, say goodbye
	if (firstLetter === 'j') {

		speakWord = 'Good bye';
		console.log(speakWord+" "+names[n]);

	} 
	else { // say hello, default

		console.log(speakWord+" "+names[n]);

	}
} // end forloop

})();
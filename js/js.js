$(document).ready(function() {	
var i = prompt("Guess a number between 1-100!!");
var count = [];
var parse = parseInt(i);

var fizzbuzz = function(){
	if (i % 5 == 0 && i % 3 == 0) {
	count.push("Fizzbuzz");
	} else if(i % 3 == 0) {
    count.push("Fizz");
	} else if(i % 5 == 0) {
	count.push("Buzz");
    } else if (i % 1 != 0) {
    alert("Please enter a whole number!")
    } else 
    count.push(i);	
};

for(var i = 1; i< parse; i++) {
	fizzbuzz(i)
}//fizzbuzz(parse);

count;
parse;
fizzbuzz();
document.write(count);
});

// complete the given function

function palindrome(str){

	int n=str.length;
	let i=0;
	let j=n-1;
	let isPalindrome=true;
	while(i<=j){
		if(str[i]!==str[j]){
			isPalindrome=false;
			break;
		}
		i++;
		j--;
	}
	console.log(isPalindrome ? "true" : "false");
}
module.exports = palindrome

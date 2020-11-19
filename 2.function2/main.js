function palindrome(str){
	var re = /[^A-Za-z0-9]/g;
  var ispalindrome = 'true';
	str = str.toLowerCase().replace(re, '');
 	var len = str.length;
 	for (var i = 0; i < len/2; i++) {
   		if (str[i] !== str[len - 1 - i]) {
        	ispalindrome = 'false';
            break;
   		}
 	}
 	document.write(ispalindrome);
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

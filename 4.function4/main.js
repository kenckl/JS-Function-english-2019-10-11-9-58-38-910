function countWords(message){
  var words = 1;
  for (i=0;i<message.length;i++){
  	if (message[i] == " "){
    	words++;
    }
  }
  document.write(words);
}
countWords('Good morning, I love JavaScript.'); // should return 5

function alphabetSort(str){
  var arr = str.split('');
  var sorted = arr.sort();
  document.write(sorted.join(''));
}
alphabetSort('hello'); // should return 'ehllo'

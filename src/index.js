if(module.hot) {
  // accept itself
  module.hot.accept();
}



import quickSort from './quick-sort-functional';
var items = ["y", "z", "r","n","a","d","u","f","x","h","s","j", "i", "g"];

var sorted = quickSort(items);
console.log(sorted);

// var items = ["a","b","c","d","e","f","g","h","i","j"];
// console.log(binarySearch(items, "i"));
// console.log(binarySearch(items, "b"));
// console.log(binarySearch(items, "l"));

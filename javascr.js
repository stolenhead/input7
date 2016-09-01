function primo(num) {
  var prime = num != 1;
  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
     console.log (i);
    }
  }
}
primo(7);

function fibonacci(n){
	var a=0;
	var b=1;
	while(n>0){
		[a,b]= [a+b,a];n--;
		document.write(b," ");
  }
}
fibonacci(4)
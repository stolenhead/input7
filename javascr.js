var num = parseInt(prompt("Teclea un numero "));

  if(num%2==0 && 2<num && num<5 ){
           document.write("bien");  
    }   
  else if (num%2==0 && 6<num && num<20) {
  	document.write("GREAT!");
  } else if(num%2==0 && 20<num ) {
  	document.write("perfecto");
  }              
  else{
      window.alert("ODD!");
      }  

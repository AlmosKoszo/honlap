function findH(){
    var sideA = document.getElementById("a").value;
    var sideB = document.getElementById("b").value;
   
  
    if(sideA<1 || sideB<1){
       alert("Please enter in a valid number!");
       }else{
    //get a squared and b squared
    document.getElementById("aSqu").innerHTML = sideA * sideA;
    document.getElementById("bSqu").innerHTML = sideB * sideB;
    
    //find sum of a squared and b squared
    document.getElementById("aAndB").innerHTML = (sideA * sideA) + (sideB * sideB);
    
    //find hypotenuse
     document.getElementById("sqrtC").innerHTML = Math.round((Math.sqrt((sideA * sideA) + (sideB * sideB)) * 100)) / 100;
    
    //The div that makes the triangle
    var tri= document.getElementById("triangle");
    tri.style.borderTopWidth = sideA * 30 + "px";
    tri.style.borderLeftWidth = sideB * 30 + "px";
  
    
    //Chooses random values for red green blue
    var randoR = Math.floor(Math.random() * 255);
    var randoG = Math.floor(Math.random() * 255);
    var randoB = Math.floor(Math.random() * 255);
    
    //Changes to random background color
    tri.style.borderLeftColor = "rgb(" + randoR + "," + randoG  + "," +randoB+ ")";
   }
  }
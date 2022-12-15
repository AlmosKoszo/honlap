function Calhypo(a,b){
   var hypo=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
   return hypo;
   }
   function Cal_hypo(){
   var  x=parseInt(document.getElementById("adjacent").innerHTML);
   var  y=parseInt(document.getElementById("opposite").innerHTML);
   var z=Calhypo(x,y);
   var c=z.toFixed(2);
   document.getElementById('ans').textContent="The Length of hypotenuse is= "+c;
   
   }
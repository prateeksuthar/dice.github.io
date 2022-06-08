document.querySelector(".btn").addEventListener("click" , function(){
   var randomNumber1 = Math.floor((Math.random() * 6) + 1);
   var randomImageSource = "images/dice" + randomNumber1 +".png"
   document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource)


   var randomNumber2 = Math.floor((Math.random() * 6) + 1);
   var randomImageSource = "images/dice" + randomNumber2 +".png"
   document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource)

   if (randomNumber1 < randomNumber2){
       document.querySelector("h3").innerHTML = "Player 2 won"
       document.querySelector("h3").style.color = "brown"

   }
   else if(randomNumber1 > randomNumber2){
    document.querySelector("h3").innerHTML = "Player 1 won"
    document.querySelector("h3").style.color = "cyan"

   }
   else{
    document.querySelector("h3").innerHTML = "draw"
    document.querySelector("h3").style.color = "white"
   }
//    alert(randomNumber)
})
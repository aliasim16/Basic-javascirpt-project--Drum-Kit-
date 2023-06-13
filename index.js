var lenght = document.querySelectorAll(".drum").length;
    for (var i = 0; i < lenght; i++){
        document.querySelectorAll(".drum")[i].addEventListener('click', function(){
        
            var buttonInnerHTML=this.innerHTML;
            makeSound(buttonInnerHTML);   
            animation(buttonInnerHTML);        
    });
        
}
    

document.addEventListener ("keydown", function(event) {
    var name = event.key;
    makeSound(name);
    animation(name);
 })

        


        function makeSound(key) {
            switch(key){
                case "w":
                    var tom1 = new Audio('sounds/crash.mp3');
                    tom1.play();
                    break;
    
                case "a":
                    var tom2 = new Audio('sounds/kick-bass.mp3');
                    tom2.play();
                    break;
                    
                case "s":
                    var tom3 = new Audio('sounds/snare.mp3');
                    tom3.play();
                    break;
    
                case "d":   
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;
    
                case "j":
                    var crash = new Audio('sounds/tom-3.mp3');
                    crash.play();
                    break;
    
                case "k":
                    var kick = new Audio('sounds/tom-2.mp3');
                    kick.play();
                    break;
    
                case "l":
                    var snare = new Audio('sounds/tom-1.mp3');
                    snare.play();
                    break;
    
                default: console.log(name+ "tuşuna basıldı,"); 
                
            }}

        function animation (currentKey) {
            var animationkey = document.querySelector("." + currentKey);

            animationkey.classList.add("pressed");

            setTimeout(function (){
                animationkey.classList.remove("pressed");
            },300 );
        }
        
       

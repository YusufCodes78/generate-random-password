const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

let button = document.getElementById("generate");
let passwordlength = 15;

function getRandomCharacter(){
    let randomChar = Math.floor(Math.random()*characters.length);
    return characters[randomChar];
}

button.addEventListener("click", function(){
    let password1 = "";
    let password2 = "";
    for(let i=0; i<passwordlength; i++){
        password1 += getRandomCharacter();
        password2 += getRandomCharacter();
    }
    pass1.textContent = password1;
    pass2.textContent = password2;
})



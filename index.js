const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1El = document.getElementById("password")
let password2El = document.getElementById("password2")
let generateBtn = document.getElementById("generate")

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function generatePassword() {
    let password1 = ""
    let password2 = ""
    for (let i = 0; i < 12; i++) {
        password1 += getRandomCharacter()
        password2 += getRandomCharacter()
    }
    password1El.value = password1
    password2El.value = password2
}

generateBtn.addEventListener("click", generatePassword)

function copyText1() {
    let copyText1 = document.getElementById("password")
    copyText1.select()
    copyText1.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText1.value)
}

function copyText2() {
    let copyText2 = document.getElementById("password2")
    copyText2.select()
    copyText2.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText2.value)

}

 
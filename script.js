//Set Variables for character sets
var lowercase = "abcdefghijklmnopqrstuvqxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ"
var numbers = "0123456789"
var specialChar = "!@#$%^&*()"
//assignment code
var generateBin = document.querySelector("#generate")
//write password to #password input
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
        passwordText.value = password;
}
// create a generatePassword function and write all the loic within this function
function generatePassword(){
//TODO:Create confirm to ask user if they want capital letters and set to a var
var upprQuest = confirm("Would you like UPPERCASE letters in your password?")
//TODO:create confirm to ask user if they want lowercase letters and set to a var
var lowrQuest = confirm("would you like numbers in your password?")
//TODO:create confirm to ask user if they want numbers and set to a var
var numsQuest = confirm("Would you like numbers in your password?")
//TODO:create confirm to ask user if thyey want special characters and set to a var
var spclQuest = confirm("Would you like special characters in your password?")
//TODO:create prompt to ask user how many char they want their password to be(at least 8 and no more than 128) and set to a var
var pwordLengthQuest = prompt("How long would you like your password? (Please select between 8 and 128 characters.)")
//TODO:create a conditional to make sure that the user has chosen at least one type of char
var conditionQuest = prompt("")
//TODO: create arrays for different character sets. (uppr,lowr,nums,spcl)
var lowr = lowercase;
var uppr = uppercase;
var nums = numbers;
var spcl = specialChar;
//TODO:create an empty array to hold user requested chars
var pwordArray = [];

//TODO:create if else statements that verify user confirms. based on their response push those specific characters to empty array. 
if(upprQuest === true){
    pwordArray = pwordArray+uppr
}
if(lowrQuest === true){
    pwordArray = pwordArray+lowr
}
if(numsQuest === true){
    pwordArray = pwordArray+nums
}
if(spclQuest === true){
    pwordArray = pwordArray+spcl
}
for(pwordLengthQuest i = 0;i<pwordArray;i++)
//TODO: create a var to hold the final results
var finalPword;

//TODO: I need a for loop to loop over my final array, it should run based on the results of the prompts when we asked user how many chars they like their pass to be, choose randomly from our final array that holds all the char that the user wanted , and save them to our finalPword var.
for (var i = 0; i < pwLength; i++) {

}

var randomNum = Math.floor(Math.random()) --is the length of the final array--
inside the for loop ( finalPword = finalPword+finalArray[randomNum])


//TODO: return the finalPass from this function outside of the for loop at the end on this function

return password;

}





//add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var myFinalArrayOfChar = []
var 

if(spcl === true){
    //push all the special chars in the empty array
myFinalArrayOfChar = myFinalArrayOfChar+SpecialChar

}

if(lowr === true){
    //push all the lowercase in the empty array
    myFinalArrayOfChar = myFinalArrayOfChar+lowercase
}
if(uppr === true){
    

}
if(nums === true){

}
if(spcl === true){

}

for( var i = 0; i < myFinalArrayOfChar; i++){

}
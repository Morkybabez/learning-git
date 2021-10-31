//CREATE MY OWN VARIABLE USING LET


let playerOne = "Maxium";
 console.log(playerOne);



// Declaring and assigning a value to playerOne

 let playerSelect = "Knight, Mage, Archer, Berserker";
 console.log (" Select your player")
 console.log(playerSelect);
 let playerGear = "Knight";
console.log ("Your player has picked the")
console.log(playerGear);

let playerStat = "(Knight) = 70Atk, 50Def, 30MDef, 40MAtk";

console.log(playerOne, playerStat);



// HEALTH AT 100
let playerHealth = 100;

function Attack(damageTaken) {
    playerHealth = playerHealth - damageTaken;
}

function GetHealth() {
    return playerHealth;
}

console.log('Starting Health', GetHealth())
Attack(10);



// GETTING ATTACK
Attack(27);

Attack(53);

Attack(19);


// initialize after Attack stats to trigger the else if statement
console.log(GetHealth());

// if player is less than 0 send Alert if higher
//use  else statement





   /////   Comparison Operators < 0    /////

  if(playerHealth  < 0) {
    alert('Your Player is Dead');
     }
     else if (playerHealth >= 5 ) {
  console.log('Maxium needs Health')
  
   function endGame(playerHealth) {
    const finalHealth = GetHealth(playerHealth < 0);
   return console.log("GAME OVER"); } 
   

     
   // RETURN STATEMENT WILL STOP THE GAME IF ITS LESS THAN 0 //
   
//// GAME SHOULD AUTOMATICALLY END IF LESS THAN 0 NO CONTINUATION/////

//////// HEALING PACK IF ELSE STATEMENT is more than 5 ///////

let playerInjured = GetHealth();

function Heal(medPack) {
    playerInjured = playerInjured + medPack;
}
function HealMe() {
    return playerInjured;
}

console.log('Im dying need health pack', HealMe())
Heal(10);
Heal(5);
Heal(20);

console.log(HealMe());
}
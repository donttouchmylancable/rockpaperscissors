function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getComputerChoice(){
    choice="nothing";
    randnum=getRandomInt(3);
    if(randnum=0){choice="Schere";}
    if(randnum=1){choice="Stein";}
    if(randnum=2){choice="Papier";}
    return choice;
}
function playRound(playerSeletion,computerSelection){
winner="error";
if(playerSeletion=="Schere"){
    if(computerSelection=="Schere"){winner="noone"}
    if(computerSelection=="Stein"){winner="computer"}
    if(computerSelection=="Papier"){winner="player"}
}
if(playerSeletion=="Stein"){
    if(computerSelection=="Schere"){winner="player"}
    if(computerSelection=="Stein"){winner="noone"}
    if(computerSelection=="Papier"){winner="computer"}
}
if(playerSeletion=="Papier"){
    if(computerSelection=="Schere"){winner="computer"}
    if(computerSelection=="Stein"){winner="player"}
    if(computerSelection=="Papier"){winner="noone"}
}
return winner;
}
function game(){
console.log("Schere Stein Papier");
console.log("Was wählst du?");
playersel=prompt();
winner=playRound(playersel,getComputerChoice());
console.log("Du hast "+ playersel +" gewählt. Der computer wählte " +getComputerChoice());
console.log(winner +" won!");


}
for (let i=0;i<5;i++){
game();}
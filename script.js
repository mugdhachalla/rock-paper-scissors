const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn= document.getElementById("reset");
let uwin=0;
let compwin=0;
let ties=0;
let ui;
resetBtn.addEventListener("click", () => {
    uwin = 0;
    compwin = 0;
    ties = 0;
    document.getElementById("uwin").textContent = "YOU: 0";
    document.getElementById("compwin").textContent = "THE COMPUTER: 0";
    document.getElementById("ties").textContent = "TIES: 0";
    document.getElementById("user_choice").textContent = "You Chose: ";
    document.getElementById("comp_choice").textContent = "The Computer Chose: ";
    document.getElementById("winner").textContent = "Result: ";
    document.getElementById("result-score").style.display = "none";
});

rockBtn.addEventListener("click", () => {
    ui=1;
    const comp_input=Math.floor(Math.random()*3)+1;
    comp(comp_input);
    document.getElementById("user_choice").textContent="You Chose: Rock";
    const result =game(ui,comp_input);
    document.getElementById("winner").textContent=result;
    document.getElementById("result-score").style.display = "flex";
  
});
paperBtn.addEventListener("click", () =>{
    ui=2;
    const comp_input=Math.floor(Math.random()*3)+1;
    comp(comp_input);
    document.getElementById("user_choice").textContent="You Chose: Paper";
    const result =game(ui,comp_input);
    document.getElementById("winner").textContent=result;
    document.getElementById("result-score").style.display = "flex";

});
scissorsBtn.addEventListener("click", () =>{
    ui=3;
    const comp_input=Math.floor(Math.random()*3)+1;
    comp(comp_input);
    document.getElementById("user_choice").textContent="You Chose: Scissors";
    const result =game(ui,comp_input);
    document.getElementById("winner").textContent=result;
    document.getElementById("result-score").style.display = "flex";
});
function game(ui,comp_input){
    let result = ""
    if(ui==1){
        if(comp_input==1){
            result="Result: TIE";
            ties=ties+1;
        }
        else if(comp_input==2){
            result="Result: YOU LOSE";
            compwin=compwin+1;
        }
        else{
            result="Result: YOU WIN";
            uwin=uwin+1;
        }

    }
    if(ui==2){
        if(comp_input==1){
            result="Result: YOU WIN";
            uwin=uwin+1;
        }
        else if(comp_input==2){
            result="Result: TIE";
            ties=ties+1;
        }
        else{
            result="Result: YOU LOSE";
            compwin=compwin+1;
        }
    }
    if(ui==3){
        if(comp_input==1){
            result="Result: YOU LOSE";
            compwin=compwin+1;
        }
        else if(comp_input==2){
            result="Result: YOU WIN";
            uwin=uwin+1;
        }
        else{
            result="Result: TIE";
            ties=ties+1;
        }

        
    }
    document.getElementById("uwin").textContent = "YOU: " + uwin;
    document.getElementById("compwin").textContent = "THE COMPUTER: " + compwin;
    document.getElementById("ties").textContent = "TIES: " + ties;
    return result;
}

function comp(comp_input){
    if(comp_input==1){
        document.getElementById("comp_choice").textContent="The Computer Chose: Rock";
    }
    else if (comp_input==2){
        document.getElementById("comp_choice").textContent="The Computer Chose: Paper";
    }
    else{
        document.getElementById("comp_choice").textContent="The Computer Chose: Scissors";
    }
}

    


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
let ui;
let result;
rockBtn.addEventListener("click", () => {
    ui=1;
    const comp_input=Math.floor(Math.random()*3)+1;
    comp(comp_input);
    document.getElementById("user_choice").textContent="You Chose: Rock";
    game(ui,comp_input);
    document.getElementById("result").style.display = "block";
    document.getElementById("winner").textContent=result;

});
paperBtn.addEventListener("click", () =>{
    ui=2;
    const comp_input=Math.floor(Math.random()*3)+1;
    comp(comp_input);
    document.getElementById("user_choice").textContent="You Chose: Paper";
    game(ui,comp_input);
    document.getElementById("result").style.display = "block";
    document.getElementById("winner").textContent=result;
});
scissorsBtn.addEventListener("click", () =>{
    ui=3;
    const comp_input=Math.floor(Math.random()*3)+1;
    comp(comp_input);
    document.getElementById("user_choice").textContent="You Chose: Scissors";
    game(ui,comp_input);
    document.getElementById("result").style.display = "block";
    document.getElementById("winner").textContent=result;
});
function game(ui,comp_input){
    if(ui==1){
        if(comp_input==1){
            result="Result: TIE";
        }
        else if(comp_input==2){
            result="Result: YOU LOSE";
        }
        else{
            result="Result: YOU WIN";
        }
}
if(ui==2){
    if(comp_input==1){
        result="Result: YOU WIN";
    }
    else if(comp_input==2){
        result="Result: TIE";
    }
    else{
        result="Result: YOU LOSE";
    }
}
if(ui==3){
    if(comp_input==1){
        result="Result: YOU LOSE";
    }
    else if(comp_input==2){
        result="Result: YOU WIN";
    }
    else{
        result="Result: TIE";
    }
}
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

    


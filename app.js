let boxes=document.querySelectorAll(".box");
const resetBtn=document.querySelector(".reset");
const newGame=document.querySelector(".new");
const msgCont=document.querySelector(".msg-cont");
let h3=document.querySelector("h3");

let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count=0;
let isWinner=false;
function resetGame(){
    turnO = true;
    enableboxes();
    msgCont.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO){
            box.innerText="0";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        // console.log(count);
    })
})

const enableboxes = ()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        count=0;
    }
}

const disableboxes = ()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
function showWinner(winner){
    // if(!winner && count >= 9){
    //     console.log("draw");
    // }
    h3.innerText=`Congratulations ,Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableboxes();
}
function showdraw(){
    h3.innerText=`Draw`;
    msgCont.classList.remove("hide");
}
function checkWinner(){
    for(let pattern of winPattern)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        // console.log(pos1Val,pos2Val,pos3Val);

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                // console.log("winner is",pos1Val);
                isWinner = true;
                showWinner(pos1Val);
            }
            
        }

    }
    if(isWinner === false && count == 9){
        // console.log("draw");
        showdraw();
    }

}
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
// access the html element
let box = document.querySelectorAll(".box");

let reset = document.querySelector("reset");
let msg= document.querySelector("#msg")
let turno =true;
// this is winning probility in the game
const winpattern = [
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
];

// event lisitne/r
// this section is used to set X and O property in the game
box.forEach((box) =>
{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turno){
            box.innerHTML = "0";
          turno = false;
        } else{
            box.innerHTML ="X";
            turno = true;
        }
        box.disabled =true;
// this box.disabled function is used to only one time used buttons

checkWinner();
    });
});
const showWinner = (winner) => {
 msg.innerHTML = `congratulations, winner is ${winner}`;
 msg.classList.remove("hide");
}
const checkWinner = () => {
  for(let pattern of winpattern) {
   let pos1Val = box [pattern[0]].innerHTML;
   let pos2Val = box [pattern[1]].innerHTML;
   let pos3Val = box [pattern[3]].innerHTML;
   if(pos1Val !=""&& pos2Val !="" && pos3Val !="") {
    if(pos1Val === pos2Val&& pos2Val === pos3Val) {
        console.log("vipul is winner",pos1Val);
        showWinner()
    }
   }
  };

}
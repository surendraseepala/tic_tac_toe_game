let buttons=document.querySelectorAll('.box')
let reset=document.querySelector('#reset')
let winning_msg=document.querySelector('#msg')
let newGame=document.querySelector('#new_btn')
let ResetGame=document.querySelector('#reset_btn')
let container=document.querySelector('.msg_contaianer')

 let O='O';
let X='X'
let turnO=true;
let moves=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
    ]
buttons.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log('button clicked')
        if(turnO===true){
            box.innerText=O;
            turnO=false
        }else{
            box.innerText=X;
            turnO=true
    
        }
    box.disabled=true
    moves++
        checkWinner()
    });
    })
    
  const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     buttons[pattern[0]].innerText,
        //     buttons[pattern[1]].innerText,
        //     buttons[pattern[2]].innerText
        //     )
        let pos1Val= buttons[pattern[0]].innerText
        let pos2Val= buttons[pattern[1]].innerText
        let pos3Val= buttons[pattern[2]].innerText
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos1Val===pos3Val){
                console.log('winner',pos1Val)
                gameWinner(pos1Val)
                return
            }
        }
    }
    if(moves===9){
        gameDraw()
        disabledButtons()
    }
  }
  const gameWinner=(winner)=>{
    winning_msg.innerText=`congrats!winner is ${winner}`
    container.classList.remove("hide")
    disabledButtons()

  }
  ResetGame.addEventListener("click",()=>{
    buttons.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    container.classList.add("hide")

        
    })
})
newGame.addEventListener("click",()=>{
    buttons.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    container.classList.add("hide")

    })
})
const gameDraw=()=>{
    winning_msg.innerText="It\'s Draw!No one won the game"
    container.classList.remove("hide")
    
    
    
}
const disabledButtons=()=>{
    buttons.forEach((box)=>{
        box.disabled=true
    })
}
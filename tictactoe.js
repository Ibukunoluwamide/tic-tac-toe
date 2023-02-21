let playersName =JSON.parse(localStorage.getItem("playersNames"))
playersName.map((usersName)=>{
    player1.innerHTML = usersName.Player1
    player2.innerHTML = usersName.Player2

})
let tic = "X"
show1.innerHTML = 0
show2.innerHTML = 0
const test = (e)=>{
    
    playersName.map((usersName)=>{
        if (e.target.innerText=="") {
            if (  tic == "X") {
                e.target.innerText = "X"
                tic = "O"   
            }else if (tic=="O") {
                e.target.innerText = "O"
                tic = "X"   
                // console.log(tdddA)
                
            }
     }if (fst.innerText == e.target.innerText && sec.innerText == e.target.innerText && trd.innerText == e.target.innerText) {
          if (e.target.innerText=="X") {
              alert(`${usersName.Player1} Won`)
              show1.innerHTML = Number(show1.innerHTML) + 1 
               fst.innerText = ""
               sec.innerText = ""
               trd.innerText = ""
               forth.innerText = ""
               fifth.innerText = ""
               sixth.innerText = ""
               seventh.innerText = ""
               eight.innerText = ""
               nineth.innerText = ""
          }else{
            alert(`${usersName.Player2} Won`)
              show2.innerHTML = Number(show2.innerHTML) + 1 
               fst.innerText = ""
               sec.innerText = ""
               trd.innerText = ""
               forth.innerText = ""
               fifth.innerText = ""
               sixth.innerText = ""
               seventh.innerText = ""
               eight.innerText = ""
               nineth.innerText = ""

          }
      
     } else if (forth.innerText == e.target.innerText && fifth.innerText == e.target.innerText && sixth.innerText == e.target.innerText) {
        if (e.target.innerText=="X") {
            alert(`${usersName.Player1} Won`)
            show1.innerHTML = Number(show1.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""
        }else{
          alert(`${usersName.Player2} Won`)
            show2.innerHTML = Number(show2.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""

        }
    
    
     } else if (seventh.innerText == e.target.innerText && eight.innerText == e.target.innerText && nineth.innerText == e.target.innerText) {
        if (e.target.innerText=="X") {
            alert(`${usersName.Player1} Won`)
            show1.innerHTML = Number(show1.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""
        }else{
          alert(`${usersName.Player2} Won`)
            show2.innerHTML = Number(show2.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""

        }
    
        
     } else if (fst.innerText == e.target.innerText && forth.innerText == e.target.innerText && seventh.innerText == e.target.innerText) {
        if (e.target.innerText=="X") {
            alert(`${usersName.Player1} Won`)
            show1.innerHTML = Number(show1.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""
        }else{
          alert(`${usersName.Player2} Won`)
            show2.innerHTML = Number(show2.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""

        }
    
     } else if (sec.innerText == e.target.innerText && fifth.innerText == e.target.innerText && eight.innerText == e.target.innerText) {
        if (e.target.innerText=="X") {
            alert(`${usersName.Player1} Won`)
            show1.innerHTML = Number(show1.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""
        }else{
          alert(`${usersName.Player2} Won`)
            show2.innerHTML = Number(show2.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""

        }
    
     } else if (trd.innerText == e.target.innerText && sixth.innerText == e.target.innerText && nineth.innerText == e.target.innerText) {
        alert(`${e.target.innerText} Won`)
        fst.innerText = ""
         sec.innerText = ""
         trd.innerText = ""
         forth.innerText = ""
         fifth.innerText = ""
         sixth.innerText = ""
         seventh.innerText = ""
         eight.innerText = ""
         nineth.innerText = ""
     } else if (fst.innerText == e.target.innerText && fifth.innerText == e.target.innerText && nineth.innerText == e.target.innerText) {
        if (e.target.innerText=="X") {
            alert(`${usersName.Player1} Won`)
            show1.innerHTML = Number(show1.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""
        }else{
          alert(`${usersName.Player2} Won`)
            show2.innerHTML = Number(show2.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""

        }
    
     } else if (trd.innerText == e.target.innerText && fifth.innerText == e.target.innerText && seventh.innerText == e.target.innerText) {
        if (e.target.innerText=="X") {
            alert(`${usersName.Player1} Won`)
            show1.innerHTML = Number(show1.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""
        }else{
          alert(`${usersName.Player2} Won`)
            show2.innerHTML = Number(show2.innerHTML) + 1 
             fst.innerText = ""
             sec.innerText = ""
             trd.innerText = ""
             forth.innerText = ""
             fifth.innerText = ""
             sixth.innerText = ""
             seventh.innerText = ""
             eight.innerText = ""
             nineth.innerText = ""

        }
     }
    })


}
const resetGame = ()=>{
  fst.innerText = ""
  sec.innerText = ""
  trd.innerText = ""
  forth.innerText = ""
  fifth.innerText = ""
  sixth.innerText = ""
  seventh.innerText = ""
  eight.innerText = ""
  nineth.innerText = ""
}
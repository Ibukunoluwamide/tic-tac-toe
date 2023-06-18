let array = []
let playersName = JSON.parse(localStorage.getItem("playersNames"))
playersName.map((usersName) => {
  player1.innerHTML = usersName.Player1
  player2.innerHTML = usersName.Player2
  let bothPlayers = {
    Player1: usersName.Player1,
    Player2: usersName.Player2,
  }
  array.push(bothPlayers)
  localStorage.setItem("playersNames", JSON.stringify(array))

})


let song = new Audio('./song/WinnerFamous official Audio.mp3')
const playSong = () => {
  song.play()
}
const stopSong = () => {
  song.pause()
}


let tic = "X"
show1.innerHTML = 0
show2.innerHTML = 0
const test = (e) => {

  playersName.map((usersName) => {
    if (e.target.innerText == "") {
      if (tic == "X") {
        e.target.innerText = "X"
        tic = "O"
      } else if (tic == "O") {
        e.target.innerText = "O"
        tic = "X"

      }
    } if (fst.innerText == e.target.innerText && sec.innerText == e.target.innerText && trd.innerText == e.target.innerText) {
      if (e.target.innerText == "X") {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player1} Won`,
        })
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
      } else {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player2} Won`,
        })
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
      if (e.target.innerText == "X") {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player1} Won`,
        })
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
      } else {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player2} Won`,
        })
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
      if (e.target.innerText == "X") {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player1} Won`,
        })
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
      } else {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player2} Won`,
        })
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
      if (e.target.innerText == "X") {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player1} Won`,
        })
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
      } else {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player2} Won`,
        })
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
      if (e.target.innerText == "X") {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player1} Won`,
        })
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
      } else {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player2} Won`,
        })
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
      if (e.target.innerText == "X") {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player1} Won`,
        })
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
      } else {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player2} Won`,
        })
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
      if (e.target.innerText == "X") {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player1} Won`,
        })
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
      } else {
        Swal.fire({
          icon: 'success',
          title: `${usersName.Player2} Won`,
        })
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
const resetGame = () => {
  Swal.fire({
    title: 'Are you sure you want to reset game?',
    text: "Note: You will lose your scores!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, reset it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fst.innerText = ""
      sec.innerText = ""
      trd.innerText = ""
      forth.innerText = ""
      fifth.innerText = ""
      sixth.innerText = ""
      seventh.innerText = ""
      eight.innerText = ""
      nineth.innerText = ""
      show1.innerHTML = 0
      show2.innerHTML = 0
    }
  })
 
}

const clearTable = ()=>{
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
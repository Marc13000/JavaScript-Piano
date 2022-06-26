// const { waitForDebugger } = require("inspector")

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const input = []

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const blueKeys = document.querySelectorAll('.key.blue')

keys.forEach(key => {
  key.addEventListener('click', () => {
    if(key.classList.contains("blue")) {
      playNote(key);
    }
  }
    )
})

async function fetchText(url, i){
  const response = await fetch(url);
  var data = await response.json();
  if(i < data.length) {
    document.getElementById("currKey").innerText = data[i].note;
    document.getElementById(data[i].note).classList.add("blue");
  }
  else {
    document.getElementById("currKey").innerText = "Well Played!";
  }
  // switch(data[i].note) {
  //   case 'a0':
  //   case 'a1':
  //   case 'a2':        
  //     document.getElementById(data[i].note.charAt(0)).classList.add("blue");
  //     document.getElementById(data[i].note.charAt(0)).classList.remove("white");
  //     break;
  //   case 'b0':
  //   case 'b1':
  //   case 'b2':   
  //     document.getElementById("b").classList.add("blue");
  //     document.getElementById("b").classList.remove("white");
  //     break;
  //   default:
  //     console.log("key doesn't exist")
  // }
}
var noteCt = 0
fetchText('notes.json', noteCt)

// document.addEventListener('keydown', e => {
//   if (e.repeat) return
//   const key = e.key
//   const whiteKeyIndex = WHITE_KEYS.indexOf(key)
//   const blackKeyIndex = BLACK_KEYS.indexOf(key)

//   if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
//   if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
//   if (whiteKeyIndex > -1) playNote(blueKeys[whiteKeyIndex])
//   if (blackKeyIndex > -1) playNote(blueKeys[blackKeyIndex])
// })

async function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  setInterval(function(){
		if(noteAudio.currentTime>0.7){
			noteAudio.pause();
    }
	},500);
  document.getElementById(key.dataset.val).classList.remove("blue");
  
  // key.classList.add('active')
  // noteAudio.addEventListener('ended', () => {
  //   key.classList.remove('active')
  // })
  noteCt++;
  fetchText('notes.json',noteCt);
}
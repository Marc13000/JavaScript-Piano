const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const input = []

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const blueKeys = document.querySelectorAll('.key.blue')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

async function fetchText(url){
  const response = await fetch(url);
  var data = await response.json();
  for (let i = 0; i < data.length; i++) {
    switch(data[i].note) {
      case 'a0':
      case 'a1':
      case 'a2':

        break;
      case 'b1':
        // code block
        break;
      default:
        console.log("key doesn't exist")
    }
  }
}

fetchText('notes.json')

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
  if (whiteKeyIndex > -1) playNote(blueKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blueKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  
  // key.classList.add('active')
  // noteAudio.addEventListener('ended', () => {
  //   key.classList.remove('active')
  // })
}
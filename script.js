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

// Requiring fs module in which
// readFile function is defined.
const fs = require('fs')
  
// Reading data in utf-8 format
// which is a type of character set.
// Instead of 'utf-8' it can be 
// other character set also like 'ascii'
fs.readFile('Input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
  
    // Converting Raw Buffer to text
    // data using tostring function.
    console.log(data);
})

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

async function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  // key.classList.add('active')
  // noteAudio.addEventListener('ended', () => {
  //   key.classList.remove('active')
  // })
}
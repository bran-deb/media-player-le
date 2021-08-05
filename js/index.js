const video = document.querySelector('#video')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')

play.addEventListener('click', handlePlay)
pause.addEventListener('click', handlePause)

function handlePlay() {
    video.play()
    play.hidden = true
    pause.hidden = false
    console.log('play');
}

function handlePause() {
    video.pause()
    play.hidden = false
    pause.hidden = true
    console.log('pause');
}
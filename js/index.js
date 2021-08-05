const video = document.querySelector('#video')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')

const handlePlay = () => {
    video.play()
    play.hidden = true
    pause.hidden = false
    console.log('play');
}

const handlePause = () => {
    video.pause()
    play.hidden = false
    pause.hidden = true
    console.log('pause');
}

play.addEventListener('click', handlePlay)
pause.addEventListener('click', handlePause)
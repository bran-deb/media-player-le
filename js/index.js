const video = document.querySelector('#video')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const backward = document.querySelector('#backward')
const forward = document.querySelector('#forward')
const progress = document.querySelector('#range')


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

const handleBackward = () => {
    video.currentTime -= 10
    console.log('atras 10 seg');
}

const handleForward = () => {
    video.currentTime += 10
    console.log('adelante 10 seg');
}

const handleLoaded = () => {
    progress.max = video.duration
    console.log('video cargado', video.duration);
}

const handleTimeUpdate = () => {
    progress.value = video.currentTime
    console.log('tiempo actual', video.currentTime);
}

play.addEventListener('click', handlePlay)
pause.addEventListener('click', handlePause)
backward.addEventListener('click', handleBackward)
forward.addEventListener('click', handleForward)
video.addEventListener('loadedmetadata', handleLoaded)
video.addEventListener('timeupdate', handleTimeUpdate)
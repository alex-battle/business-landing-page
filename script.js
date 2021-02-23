// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click',() => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
 })


// end of navbar

// Section 2 video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document. querySelector('.video-bar')

// play/pause
const playPause = () => {
    if(video.paused){
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = .8
    }else{
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = .3
    }
    }

btn.addEventListener('click', () => {
    playPause()
})

// duration bar
video.addEventListener('timeupdate', () =>{
    // console.log(video.currentTime, video.duration)
    const barWidth = video.currentTime/video.duration
    bar.style.width = `${barWidth * 100}%`
})

// End of Section 2 video
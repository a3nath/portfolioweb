function playVideo(e){
    this.play()
}

function pauseVideo(e){
    this.pause()
}

const projvid = document.querySelectorAll('.projvid');

projvid.forEach(vid => vid.addEventListener("mouseover", playVideo))

projvid.forEach(vid => vid.addEventListener("mouseleave", pauseVideo))
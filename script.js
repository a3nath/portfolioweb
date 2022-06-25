function playVideo(e){
    this.play()
}

function pauseVideo(e){
    this.pause()
}

function playRotate(e){
    //add property
    // animation: spin 8s linear infinite;
    this.style.animation = "spin 4s linear infinite"
}

function pauseRotate(e){
    //add property
    // animation: spin 8s linear infinite;
    this.style.animation = ""
}

const projVid = document.querySelectorAll('.projvid');

projVid.forEach(vid => vid.addEventListener("mouseover", playVideo))
projVid.forEach(vid => vid.addEventListener("mouseleave", pauseVideo))

const svgImg = document.querySelectorAll('.svg-img');

svgImg.forEach(img => img.addEventListener("mouseover", playRotate))
svgImg.forEach(img => img.addEventListener("mouseleave", pauseRotate))
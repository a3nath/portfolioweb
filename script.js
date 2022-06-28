

const projVid = document.querySelectorAll('.projvid');

projVid.forEach(vid => vid.addEventListener("mouseover", playVideo))
projVid.forEach(vid => vid.addEventListener("mouseleave", pauseVideo))

const svgImg = document.querySelectorAll('.svg-img');

svgImg.forEach(img => img.addEventListener("mouseover", playRotate))
svgImg.forEach(img => img.addEventListener("mouseleave", pauseRotate))

const vidStyles = `
    border: solid #2a307a;
    box-shadow: 0 20px 20px 0 #2a307a
    `

function playVideo(e){
    this.play();
    this.style.cssText = vidStyles
}

function pauseVideo(e){
    this.pause()
    this.style = ""
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

const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', () => {
    const element = document.getElementById("about");
    element.scrollIntoView({behavior:"smooth"})
    }
)
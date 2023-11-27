import './style.css'
import image0 from './images/image_1.jpg'
import image1 from './images/image_2.jpg'
import image2 from './images/image_3.jpg'
import image3 from './images/image_4.jpg'
import image4 from './images/image_5.jpg'
import left from './icons/left-arrow.svg'
import right from './icons/right-arrow.svg'

//create container for images and arrows and add it to body
const container = document.createElement('div')
container.classList.add('container')
document.querySelector('body').append(container)

//create frame for images and add it to container
const frame = document.createElement('div')
frame.classList.add('frame')
container.append(frame)

//create arrows and place them to both sides of frame

const leftArrow = document.createElement('img')
leftArrow.src = left
leftArrow.classList.add('arrows')
const rightArrow = document.createElement('img')
rightArrow.src = right
rightArrow.classList.add('arrows')
frame.insertAdjacentElement('beforebegin', leftArrow)
frame.insertAdjacentElement('afterend', rightArrow)


//fill up frame with images
function createImage () {
    const sources = [image0, image1, image2, image3, image4]
    for (let i = 0; i < 5; i++) {
        const image = document.createElement('img')
        image.src = sources[i]
        image.alt = `slide${i}`
        image.classList.add('invisible')
        frame.append(image)
    }
}
createImage ()

let counter = 0
let images = document.querySelectorAll('.frame img')
images[counter].classList.add('visible')


function clickOnRightArrow () {
    rightArrow.addEventListener('click', function() {
        images[counter].classList.remove('visible')
        if (counter < 4) counter++
        else counter = 0
        images[counter].classList.add('visible')
        changePoint ()
    })
}

function clickOnLeftArrow () {
    leftArrow.addEventListener('click', function () {
        images[counter].classList.remove('visible')
        if (counter > 0) counter--
        else counter = 4
        images[counter].classList.add('visible')
        changePoint ()
    })
}

clickOnRightArrow ()
clickOnLeftArrow ()

//create points that corresponde to slides and put them in body
function createPoints () {
    const divWithPoints = document.createElement('div')
    for (let i = 0; i < 5; i++) {
        const point = document.createElement('div')
        point.classList.add('point')
        divWithPoints.append(point)
    }
    document.querySelector('body').insertAdjacentElement('beforeend', divWithPoints)
}
createPoints()

//change color of points
function changePoint () {
    const points = document.querySelectorAll('.point')
    //clean color of all points before color change
    points.forEach(point => {
        point.style.background = 'inherit'
    });
    points[counter].style.background = 'red'
}
changePoint ()



function rightTraffic () {
    images[counter].classList.remove('visible')
    if (counter < 4) counter++
    else counter = 0
    images[counter].classList.add('visible')
    changePoint ()
}

setInterval(rightTraffic, 5000)

function moveToSlideWithPoint () {
    const points = document.querySelectorAll('.point')
    for (const point of points) {
        const array = Array.from(points)
        point.addEventListener('click', function () {
            const pointNumber = array.indexOf(point)
            images[counter].classList.remove('visible')
            counter = pointNumber
            images[counter].classList.add('visible')
            changePoint ()
        })
    }
}
moveToSlideWithPoint ()



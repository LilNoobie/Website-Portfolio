let i = 0;
let txt = 'Who is Noobie?';
let speed = 200;

function typeWriter(){
    if(i < txt.length){
        document.getElementById("feature-text").innerHTML +=txt.charAt(i);
        i++
        setTimeout(typeWriter,speed);
    }
}

typeWriter();

//Show Collector Part
const collectorTxt = document.getElementById('collector');
const collectorHover = document.getElementById('hidden-images');
const swickie = document.getElementById('swickie');
const stripOne = document.getElementById('strip1');

collectorTxt.addEventListener('mouseover', function showImages(){
    collectorHover.style.visibility = 'visible';
    swickie.style.visibility = 'hidden';
    collectorHover.style.opacity = '1';
    collectorHover.style.transition = 'visibility 10ms linear 10ms, opacity 500ms';
    collectionHover.style.visibility = 'hidden';
    collectionHover.style.opacity = '0';
    collectionHover.style.transition = 'visibility 10ms linear 100ms, opacity 1000ms';
})

// Show Collection Part
const collectionTxt = document.getElementById('collection');
const collectionHover = document.getElementById('photoshoot');

collectionTxt.addEventListener('mouseover', function showPhotoshoot(){
    collectionHover.style.visibility = 'visible';
    swickie.style.visibility = 'visible';
    collectionHover.style.opacity = '1';
    collectionHover.style.transition = 'visibility 10ms linear 10ms, opacity 500ms';
    collectorHover.style.visibility = 'hidden';
    collectorHover.style.opacity = '0';
    collectorHover.style.transition = 'visibility 0s linear 1000ms, opacity 1000ms';
})
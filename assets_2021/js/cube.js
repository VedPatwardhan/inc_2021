let cube = document.querySelector('.cube');
console.log(`Cube ${cube}`);

cube.addEventListener('mouseover', function(event) {
    let face1 = document.querySelector('.cube__face--front');
    face1.style.transform = "rotateY(0deg) translateZ(150px)";
    face1.style.transition = "transform 0.8s";
    let face2 = document.querySelector('.cube__face--back');
    face2.style.transform = "rotateY(180deg) translateZ(150px)";
    face2.style.transition = "transform 0.8s";
    let face3 = document.querySelector('.cube__face--left');
    face3.style.transform = "rotateY(-90deg) translateZ(150px)";
    face3.style.transition = "transform 0.8s";
    let face4 = document.querySelector('.cube__face--right');
    face4.style.transform = "rotateY(90deg) translateZ(150px)";
    face4.style.transition = "transform 0.8s";
    let face5 = document.querySelector('.cube__face--top');
    face5.style.transform = "rotateX( 90deg) translateZ(150px)";
    face5.style.transition = "transform 0.8s";
    let face6 = document.querySelector('.cube__face--bottom');
    face6.style.transform = "rotateX(-90deg) translateZ(150px)";
    face6.style.transition = "transform 0.8s";
});

cube.addEventListener('mouseout', function(event) {
    let face1 = document.querySelector('.cube__face--front');
    face1.style.transform = "rotateY( 0deg) translateZ(100px)";
    let face2 = document.querySelector('.cube__face--back');
    face2.style.transform = "rotateY(180deg) translateZ(100px)";
    let face3 = document.querySelector('.cube__face--left');
    face3.style.transform = "rotateY(-90deg) translateZ(100px)";
    let face4 = document.querySelector('.cube__face--right');
    face4.style.transform = "rotateY(90deg) translateZ(100px)";
    let face5 = document.querySelector('.cube__face--top');
    face5.style.transform = "rotateX( 90deg) translateZ(100px)";
    let face6 = document.querySelector('.cube__face--bottom');
    face6.style.transform = "rotateX(-90deg) translateZ(100px)";
});
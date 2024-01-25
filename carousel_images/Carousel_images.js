    'use strict';

const images = [
    {'id': '1', 'url':'/imgs/background.jpg'},
    {'id': '2', 'url':'/imgs/background.png'},
    {'id': '3', 'url':'/imgs/Naruto-x-Boruto-Connections.jpg'},
];


const imgsContainer = document.querySelector("#CarouselImgs");

const loadImgs = (images, imgsContainer) =>{
    images.forEach(image => {
        imgsContainer.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    });
};

loadImgs(images, imgsContainer);
let items = document.querySelectorAll(".item");

const previousImg = () =>{
    imgsContainer.appendChild(items[0]);
    items = document.querySelectorAll(".item");
}

const nextImg = () =>{
    const lastImg = items[items.length - 1];
    imgsContainer.insertBefore(lastImg, items[0]);
    items = document.querySelectorAll(".item");
};

document.getElementById("NextImgButton").addEventListener("click", previousImg);
document.getElementById("PreviousImgButton").addEventListener("click", nextImg);

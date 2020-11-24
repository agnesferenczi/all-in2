const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const men_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
let galleryImages = document.querySelectorAll(".gallery-image");
let getLatestOpenedImg;

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 170) {
        header.style.backgroundColor = 'rgb(31, 30, 30)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

men_item.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

if (galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/img/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "img/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;


                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }
        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if (changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if (calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    } else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if (calcNewImg < galleryImages.length) {
            calcNewImg = galleryImages.length;
        }
    }

    newImg.setAttribute("src", "img/img" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
    }
}

/*Nem működik: Prev gomb nem jó valahogy + a prev gomb nem igazodik a képhez*/
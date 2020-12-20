const checkpoint = 200;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 0 - currentScroll / checkpoint;
    } else {
        opacity = 1;
    }
    document.querySelector("#bemutat .call").style.opacity = opacity;
});
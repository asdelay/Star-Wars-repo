// right-side buttons responsive hover
let topBtn = document.getElementById("top_point");
let botBtn = document.getElementById("bot_point");
function makeTopWhite(){
    topBtn.style.backgroundColor="rgb(255, 255, 255)";
}
function makeBotWhite(){
    botBtn.style.backgroundColor="rgb(255, 255, 255)";
}
function makeTopTransparent(){
    topBtn.style.backgroundColor="rgba(255, 255, 255, 0.221)";
}
function makeBotTransparent(){
    botBtn.style.backgroundColor="rgba(255, 255, 255, 0.221)";
}
// slider
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', () => {
        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


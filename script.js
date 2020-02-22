(function mobileNav () {
    const navbtn = document.querySelector('.menuBar');
    const nav = document.querySelector('.menuContainer');
    navbtn.addEventListener('click', e =>{
        if(nav.style.display === 'none'){
            nav.style.display = 'flex';
            navbtn.innerHTML = '&#10006;';
        }else{
            nav.style.display = 'none';
            navbtn.innerHTML = '&#9776;';
        }
    })
}());

(function dateTime (){
    const copyRightYear = document.querySelector('.cRY');
    const dT = new Date();
    const year = dT.getFullYear();
    copyRightYear.innerHTML = `${year}.`;
}());

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];
        if(this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        let typeSpeed = 200;

        if(this.isDeleting) {
            typeSpeed /= 2;
        }
        if(!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 350;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

const backgroundImageSetter = (element, ImageName) => {
    if (window.innerHeight > window.innerWidth){
        if(window.innerWidth <= 420){
            element.style.backgroundImage = `url('img/${ImageName}_s.jpg')`
        }else if(window.innerWidth <= 600){
            element.style.backgroundImage = `url('img/${ImageName}_m.jpg')`
        }else if(window.innerWidth <= 800){
            element.style.backgroundImage = `url('img/${ImageName}_l.jpg')`
        }else{
            element.style.backgroundImage = `url('img/${ImageName}_xl.jpg')`
        }
    }else{
        if(window.innerWidth <= 760){
            element.style.backgroundImage = `url('img/${ImageName}2_s.jpg')`
        }else if(window.innerWidth <= 1400){
            element.style.backgroundImage = `url('img/${ImageName}2_m.jpg')`
        }else if(window.innerWidth <= 1920){
            element.style.backgroundImage = `url('img/${ImageName}2_l.jpg')`
        }else{
            element.style.backgroundImage = `url('img/${ImageName}2_xl.jpg')`
        }
    }
};


(function (){
    let homeImage = document.querySelector('.homeIntro');

    backgroundImageSetter(homeImage, 'ship')
}());
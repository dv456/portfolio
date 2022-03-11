const menu = document.querySelector('.menu');
const nav=document.querySelector('.nav');
const overlay=document.querySelector('.menu_overlay');

menu.addEventListener("click", function(){
    document.body.classList.toggle('lock');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
})
nav.addEventListener('click', closeMenu);
function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        nav.classList.remove('active');
        document.body.classList.remove('lock');
        menu.classList.remove('active');
        overlay.classList.remove('active');
    }
}

const portfolioBtns = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.portfolio-image');
portfolioBtns.addEventListener('click',changeImage);
function changeImage(event) {
    if(event.target.classList.contains('portfolio-button')) {        
        let data=event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${data}/${index + 1}.jpg`);    
    }
}
const sun=document.querySelector('.sun');
sun.addEventListener('click',changeSun);
function changeSun(event){
    if(event.target.classList.contains('sun')){
        sun.classList.toggle('active');   
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let myBtns=document.querySelectorAll('.portfolio-button');
    myBtns.forEach(function(btn) {
        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }); 
    });

});

var lang = document.querySelectorAll(".lang");
for (var i = 0; i < lang.length; i++) {
  lang[i].addEventListener("click", function() {
  var cur = document.getElementsByClassName("active");
  cur[0].className = cur[0].className.replace(" active", "");
  this.className += " active";
  });
}

let elementsLight=['body','.section-skills','.skills-items','.section-title','.line','.section-portfolio',
'.portfolio-button','.section-video','.section-price','.price span','.nav','.nav-link','.info-footer','.info-footer a',
'.info-footer img','.menu span','.section-hero','.header-line','.nav-link','.header-logo','sun',
'.hero-text','.section-contact','.contact-title'];
const arrofClasses = document.querySelectorAll(elementsLight)
const themeSwitcher=document.querySelector('.sun');
    function lightThemeSwitched(e){
        arrofClasses.forEach(item => {
            item.classList.toggle('light');
        })
    }
themeSwitcher.addEventListener('click', (event)=>{lightThemeSwitched('sun'), event.target});


import i18Obj from './translate.js';
const allData = document.querySelectorAll("[data-i18]");
const rulang=document.querySelector('.rulang')
const enlang=document.querySelector('.enlang')
function getTranslate(lang){
    allData.forEach((element)=>element.textContent=i18Obj[lang][element.dataset.i18]
    )};
rulang.addEventListener('click', ()=>getTranslate('ru'));
enlang.addEventListener('click', ()=>getTranslate('en'));



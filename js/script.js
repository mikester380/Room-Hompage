const heading = document.querySelector('.heading');
const text = document.querySelector('.text');
const fowardSlide = document.querySelector('.forward');
const backwardSlide = document.querySelector('.backward');
const mainHeader = document.querySelector('.main-header');
let pageWidth = document.body.clientWidth;

//Getting DOM Elements for the navigation toggle
const toggle = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');
let source = "images/icon-hamburger.svg";
let headerStyle = getComputedStyle(mainHeader).backgroundImage;
let imageType = 'mobile';

const texts = [
    {
        image: '-image-hero-1.jpg',
        heading: `Discover innovative ways to decorate`,
        text: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,
    },

    {
        image: '-image-hero-2.jpg',
        heading: `We are available all across the globe`,
        text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.
      `,
    },

    {
        image: '-image-hero-3.jpg',
        heading: `Manufactured with the best materials`,
        text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`,
    }
];

const updateSlider = function(){
    heading.textContent = texts[slideCount].heading;
    text.textContent = texts[slideCount].text;
    mainHeader.style.backgroundImage = `url(images/${imageType}${texts[slideCount].image})`;
}

let slideCount = 0;
const slide = function(event){
    if (headerStyle.includes('desktop')){
        imageType = 'desktop';
    } else {if (headerStyle.includes('mobile')) imageType = 'mobile'}
    
    if (event.target.classList.contains('forward')){
        if (slideCount < texts.length - 1){
            slideCount++;
            updateSlider();
            
        }else{
            slideCount = 0;
            updateSlider();
        } 
    } else{
        if (slideCount > 0){
            slideCount--;
            updateSlider();
        }
    }
}
fowardSlide.addEventListener('click', slide);
backwardSlide.addEventListener('click', slide);

toggle.addEventListener('click', function(event){
    self = event.target;
    source = source === "images/icon-hamburger.svg" ? "images/icon-close.svg" : "images/icon-hamburger.svg";
    self.src = source;
    overlay.classList.toggle('visibility');
    navigation.classList.toggle('visibility');
    body.classList.toggle('body-scroll');

})


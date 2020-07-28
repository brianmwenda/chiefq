let slideshows = document.querySelectorAll('[data-component="slideshow"]');

slideshows.forEach(initSlideshow);

function initSlideshow(slideshow){

    let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);


// get an array of slides
let index =0,time=8000;
slides[index].classList.add('active');

setInterval(()=>{
    slides[index].classList.remove('active');
    //go over each slide incrementing the index
    index++;

    if(index === slides.length){
        index = 0;//restart the index
        
    }
    slides[index].classList.add('active');
},time);
}

let table ={
    allcontent:'.all',
    webcontent:'.web',
    cardcontent:'.cards',
    photocontent:'.photo',
    videocontent:'.video',
    logoscontent:'.logos',
    allbtn:".allcontent",
    cardbtn:".cardcontent",
    photobtn:".photocontent",
    videobtn:".videocontent",
    logosbtn:".logocontent",
    webbtn:'.webcontent'

}

let webpart = document.querySelector(table.webbtn);
let allpart = document.querySelector(table.allbtn);
let cardpart = document.querySelector(table.cardbtn);
let photopart = document.querySelector(table.photobtn);
let videopart = document.querySelector(table.videobtn);
let logopart = document.querySelector(table.logosbtn);

let alldetails = document.querySelector(table.allcontent);
let webdetails = document.querySelector(table.webcontent);
let carddetails = document.querySelector(table.cardcontent);
let photodetails = document.querySelector(table.photocontent);
let videodetails = document.querySelector(table.videocontent);
let logodetails = document.querySelector(table.logoscontent);

webdetails.style.display = 'none';
carddetails.style.display = 'none';
photodetails.style.display = 'none';
videodetails.style.display = 'none';
logodetails.style.display = 'none';

allpart.className = 'active';

webpart.addEventListener("click",() => {
    webpart.className = 'active';
    logopart.className = '';
    cardpart.className = '';
    photopart.className = '';
    videopart.className = '';
    allpart.className = '';
alldetails.style.display = 'none';
webdetails.style.display = '';
carddetails.style.display = 'none';
photodetails.style.display = 'none';
videodetails.style.display = 'none';
logodetails.style.display = 'none';
});
cardpart.addEventListener("click",() => {
    webpart.className = '';
    cardpart.className = 'active';
    photopart.className = '';
    videopart.className = '';
    allpart.className = '';
    logopart.className = '';
    alldetails.style.display = 'none';
    webdetails.style.display = 'none';
    carddetails.style.display = '';
    photodetails.style.display = 'none';
videodetails.style.display = 'none';
logodetails.style.display = 'none';
    });
    photopart.addEventListener("click",() => {
        photopart.className = 'active';
        cardpart.className = '';
        webpart.className = '';
        logopart.className = '';
        videopart.className = '';
        allpart.className = '';
        alldetails.style.display = 'none';
        webdetails.style.display = 'none';
        carddetails.style.display = 'none';
        photodetails.style.display = '';
        videodetails.style.display = 'none';
logodetails.style.display = 'none';
        });
        videopart.addEventListener("click",() => {
            videopart.className = 'active';
            photopart.className = '';
            webpart.className = '';
            cardpart.className = '';
            logopart.className = '';
            allpart.className = '';
            alldetails.style.display = 'none';
            webdetails.style.display = 'none';
            carddetails.style.display = 'none';
            photodetails.style.display = 'none';
            videodetails.style.display = '';
            logodetails.style.display = 'none';
            });
            logopart.addEventListener("click",() => {
                logopart.className = 'active';
                webpart.className = '';
                cardpart.className = '';
                photopart.className = '';
                videopart.className = '';
                allpart.className = '';
                alldetails.style.display = 'none';
                webdetails.style.display = 'none';
                carddetails.style.display = 'none';
                photodetails.style.display = 'none';
                videodetails.style.display = 'none';
                logodetails.style.display = '';
                });
                allpart.addEventListener("click",() => {
                    logopart.className = '';
                    webpart.className = '';
                    cardpart.className = '';
                    photopart.className = '';
                    videopart.className = '';
                    allpart.className = 'active';
                    alldetails.style.display = '';
                    webdetails.style.display = 'none';
                    carddetails.style.display = 'none';
                    photodetails.style.display = 'none';
                    videodetails.style.display = 'none';
                    logodetails.style.display = 'none';
                    });

let clsbtn = document.querySelector('#close');
let openbtn = document.querySelector('#open');
let navbar = document.querySelector('.navbar');
let worknavbtnopen = document.querySelector('.workopen');
let worknavbtnclose = document.querySelector('.workclose');
let worknavbar = document.querySelector('.workmenu');
navbar.className= 'navbar';
worknavbtnclose.style.display = 'none';
clsbtn.addEventListener('click', ()=>{
    console.log('close btn clicked');
    navbar.className= 'navbar';
    openbtn.id = 'open';
    clsbtn.id= 'disapear';
});
openbtn.addEventListener('click', ()=>{
    console.log('open btn clicked');
    navbar.className= 'activated';
    openbtn.id = 'disapear';
    clsbtn.id= 'close';
});
worknavbtnopen.addEventListener('click', ()=>{
    console.log('open btn clicked');
    worknavbar.className= 'workmenu-active';
    worknavbtnopen.style.display = 'none';
    worknavbtnclose.style.display = '';
});
worknavbtnclose.addEventListener('click', ()=>{
    console.log('open btn clicked');
    worknavbar.className= 'workmenu';
    worknavbtnopen.style.display = '';
    worknavbtnclose.style.display = 'none';
});

let links = document.querySelectorAll('#links');
links.forEach(cur =>{
    cur.addEventListener('click',() =>{
        worknavbar.className= 'workmenu';
        worknavbtnopen.style.display = '';
        worknavbtnclose.style.display = 'none';
        navbar.className= 'navbar';
    });
})
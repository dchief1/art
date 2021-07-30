

//----------- Sticky nav --------------/
window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//// --------------------dropdown menu-------------/
const myFun = (myFun) => {
    document.getElementById("content").classList.toggle("show")
}

window.onclick = (event) => {
    if(!event.target.matches("#clicks")) {
        let removeshow = document.getElementById("content")
        if(removeshow.classList.contains("show")) {
            removeshow.classList.remove("show")
        }
    }
}

// ----------------- responsive nav with togglemenu ---------------/
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// ---------------image slider ------------------/
const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;


prev.addEventListener("click", ()=>{
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

next.addEventListener("click", ()=>{
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

// Creat circle indicators
function circleIndicator() {
    for(let i=0; i<slides.length; i++){
        const div=document.createElement("div");
              div.innerHTML=i+1;
              div.setAttribute("onclick", "indicateSlide(this)")
              div.id=i;
              if(i==0){
                  div.className="active";
              }
              indicator.appendChild(div);
    }
}
circleIndicator();

function indicateSlide(element){
    index=element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator(){
    for(let i=0; i<indicator.children.length; i++) {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

function prevSlide() {
    if(index==0){
        index=slides.length-1;
    }else {
        index--;
    }
    changeSlide()
}

function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }else {
        index++;
    }
    changeSlide()
}

function changeSlide() {
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove("active");
    }
    
    slides[index].classList.add("active");
}

// autoplay

function resetTimer(){
    // when click to indicate button stop timer
    clearInterval(timer);
    // then start again timer
    timer=setInterval(autoPlay,4000);
}

function autoPlay(){
    nextSlide();
    updateCircleIndicator()
}

let timer=setInterval(autoPlay,4000);
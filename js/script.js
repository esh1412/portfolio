// 21861091 이승민
var main = document.querySelector('.section-wrap');
var section = document.querySelectorAll('.section-wrap section');
var header = document.querySelector('header');
var footerNav = document.querySelector('#footer-nav');
var index = 0;
// console.log(section[1].classList.contains("white"));
var duration = 1000;
var transOk = true;
function windowscroll(e){
    // if(!transOk){
    //     return;
    // }
   
    // if(e.wheelDelta < 0 && index < section.length - 1){//아래
    //     index++; 
    // }
    // else if(e.wheelDelta > 0 && index > 0){
    //     // console.log("위")
    //     index--;
    // }
    
    main.style.transform = "translate(0," + index * -100 + "vh)";
    main.style.transition = "all " + duration + "ms ease";

    mainStop();
    transOk = false;
    if(section[index].classList.contains("white")){
        console.log("white");
        header.classList.add("white");
        footerNav.classList.add("white");

    }else if(section[index].classList.contains("black")){
        console.log("black");
        header.classList.remove("white");
        footerNav.classList.remove("white")
    }
    
}
function mainStop(){
    setTimeout(function(){
        transOk = true;
    },duration);
}
window.addEventListener("mousewheel", windowscroll)
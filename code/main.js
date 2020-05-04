// Head navbar going from transparent to solid
window.addEventListener("scroll", function(){
    let menuArea = this.document.getElementById('menu-area')

    if(window.pageYOffset > 0){
        menuArea.classList.add("cus-nav")
    }else{
        menuArea.classList.remove("cus-nav")
    }
})


// Side navbar pushing out from the right
function openNav() {
  document.getElementById("mySidenav").style.width = "197px";
  // document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginRight = "197px";
  document.getElementById("home").style.marginRight = "197px";
  document.getElementById("contactMe").style.marginRight = "197px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  document.getElementById("home").style.marginRight= "0";
  document.getElementById("contactMe").style.marginRight= "0";
}

// Button for opening the side navigation in mobile mode
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


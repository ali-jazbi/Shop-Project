//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let nav=document.getElementById("navbar");
let navSM=document.getElementById("navbar-sm");
let searchSM=document.getElementById("search-sm");
let btnFooter=document.getElementById("btn-footer");
let vertical_ul=document.getElementById("vertical-ul-sm");
let drop=document.getElementById("drop");
let dropSTYLE=document.getElementById('dropdown');
let dropSEARCH=document.getElementById("drop-search");
dropSEARCH.addEventListener("mouseover", function search_1() {
  document.body.style.overflowY="hidden";
});
dropSEARCH.addEventListener("mouseout", function search_2() {
  document.body.style.overflowY="auto";
});
dropSTYLE.addEventListener("mouseover", myScript_1);
dropSTYLE.addEventListener("mouseout", myScript_2);
function myScript_1(){
  drop.style.borderBottom="3px solid #4A9FB7"
}
function myScript_2(){
  drop.style.borderBottom="0"
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20) 
    {
      navSM.style.boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)";
      searchSM.style.display="none";
      vertical_ul.style.display="none"
    }
    else{
      searchSM.style.display="flex";
      navSM.style.boxShadow="0 0 0 rgba(0, 0, 0, 0.1)"
      vertical_ul.style.display="block"
    }
  if (document.body.scrollTop > 380 ||
    document.documentElement.scrollTop > 380) 
    {
    nav.style.position="fixed";
    nav.style.backgroundColor="rgba(255, 255, 255, .93)";
    nav.style.boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)";
    nav.style.zIndex="999";
    nav.style.top = "0px";
  } else {
    nav.style.position="static";
    nav.style.backgroundColor="rgb(255, 255, 255)";
    nav.style.boxShadow="0 0 0 rgba(0, 0, 0, 0.1)";
    nav.style.top = "-50px";
  }
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.opacity = "1";
    mybutton.style.transition = "all .3s";
  } else {
    mybutton.style.opacity = "0";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

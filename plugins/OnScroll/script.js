//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let nav=document.getElementById("navbar");
let navSM=document.getElementById("navbar-sm");
let searchSM=document.getElementById("search-sm");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20) 
    {
      navSM.style.boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)";
      searchSM.style.display="none";
    }
    else{
      searchSM.style.display="flex";
      navSM.style.boxShadow="0 0 0 rgba(0, 0, 0, 0.1)"
    }
  if (document.body.scrollTop > 380 ||
    document.documentElement.scrollTop > 380) 
    {
    nav.style.position="fixed";
    nav.style.backgroundColor="rgba(255, 255, 255, .93)";
    nav.style.boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)";
    nav.style.top = "0px";
  } else {
    nav.style.position="static";
    nav.style.backgroundColor="rgb(255, 255, 255)"
    nav.style.boxShadow="0 0 0 rgba(0, 0, 0, 0.1)"
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
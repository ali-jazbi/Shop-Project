//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let nav=document.getElementById("navbar");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 380 ||
    document.documentElement.scrollTop > 380) 
    {
    nav.style.position="fixed";
    nav.style.boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
    nav.style.top = "0px";
  } else {
    nav.style.position="static";
    nav.style.boxShadow="0 0 0 rgba(0, 0, 0, 0.1)"
    nav.style.top = "-50px";
  }
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
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
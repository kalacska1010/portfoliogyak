let mybutton = document.getElementById("#felgomb");

window.onscroll = function() {
    scrollFunction()
}
// megjelenés
function scrollFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        felgomb.style.display = "block";
      } else {
        felgomb.style.display = "none";
        
      }
}
// kattintáskor felvigyen a tetejére
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
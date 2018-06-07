/** sticky navbar **/
window.onscroll = function() {
  stickyHeader()
};

var header = document.getElementById('stickyTop');
var col = document.getElementById('row-mobile');
var sticky = header.offsetTop;

function stickyHeader() {
  if(window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    col.classList.add("sticky-gap");
  } else {
    header.classList.remove("sticky");
    col.classList.remove("sticky-gap");
  }
}

/**/

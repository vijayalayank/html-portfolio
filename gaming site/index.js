// navbar script
var navbar = document.getElementById("navbar");
var lastScrollTop = 0;

window.addEventListener("scroll", function() {
    // Use scrollY as an alternative to pageYOffset
    var currentScroll = window.scrollY || window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        $("nav").slideUp();
        
    } else {
        // Scrolling up
        $("nav").slideDown();
        
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
//scroll top and down
function hoverprice(classname,inner1,inner2){
document.querySelector(classname).addEventListener("mouseenter",function(){setTimeout(() => {
    document.querySelector(classname).innerHTML=inner1;
}, 100);    
});

document.querySelector(classname).addEventListener("mouseleave",function(){
    setTimeout(() => {
        document.querySelector(classname).innerHTML=inner2;
    }, 100);    
});
}
hoverprice(".price","₹499","Get My Name");
hoverprice(".join","₹200","Join now");
// rotate the text to play video
const container = document.querySelector('.item1');
const video = document.querySelector('.video');

container.addEventListener('mouseenter', () => {
  video.play();
});

container.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0; // Reset video to the start
});


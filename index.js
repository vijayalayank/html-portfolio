document.querySelector(".ongoing").addEventListener("mouseenter",()=>{
    document.querySelector(".ongoing").innerHTML="ON GOING project";
})
document.querySelector(".ongoing").addEventListener("mouseleave",()=>{
    document.querySelector(".ongoing").innerHTML="Sample Page";
    // document.querySelector(".ongoing").style.transition="1s";
})
document.querySelector("#skill").addEventListener("click",()=>{
    document.querySelector(".content").classList.add("border-shadow");
    setInterval(() => {
        document.querySelector(".content").classList.remove("border-shadow");
    }, 500);
});
document.querySelector("#project").addEventListener("click",()=>{
    document.querySelector(".project").classList.add("border-shadow");
    setInterval(() => {
        document.querySelector(".project").classList.remove("border-shadow");
    }, 500);
});
function openPDF() {
    window.open('./Profile.pdf', '_blank');
}
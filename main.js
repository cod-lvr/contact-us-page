// open nav function
function openNav(){
    document.getElementById("mySlide").style.width = `${20}%`;
    document.getElementById("main").style.marginLeft = "230px";
    document.getElementById("mySlide").style.padding = "30px";
}
// function close nav
function closeNav(){
    document.getElementById("mySlide").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySlide").style.padding = "0";
}
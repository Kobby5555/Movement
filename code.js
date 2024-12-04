let child = document.getElementsByTagName("p");
let parent = document.getElementsByTagName("div");
let parentHeight = parent[0].offsetHeight;
let parentWidth = parent[0].offsetWidth;
let ballHeight = child[0].offsetHeight;
let ballWidth = child[0].offsetWidth;
const speed = 10;
let x_axis = 0;
let y_axis =0;
document.addEventListener("keydown",event=>{
    if(event.key === "ArrowDown"){
        y_axis += speed;}
else if(event.key === "ArrowUp"){
    y_axis -= speed;}
    else if(event.key === "ArrowLeft"){
        x_axis -= speed;}
        else if(event.key === "ArrowRight"){
            x_axis += speed;}
        if(y_axis<0) {
            y_axis = 0;
        }
        if(y_axis>parentHeight-ballHeight) {
            y_axis = parentHeight-ballHeight;
        }
        if(x_axis<0) {
            x_axis = 0;
        }
        if(x_axis>parentWidth-ballHeight) {
            x_axis = parentWidth-ballHeight;
        }
        child[0].style.top= y_axis+"px";
        child[0].style.left = x_axis+"px";

})
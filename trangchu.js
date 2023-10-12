var mang_anh=["image/banner3.jpeg","image/banner2.jpg","image/banner1.png"];
var img = document.getElementById("anhbanner")
index = 0;
function next(){
    index++;
    if(index > mang_anh.length){
        index = 0;
    }
    img.src = mang_anh[index];
}
function prev(){
    index--;
    if(index < 0){
        index = mang_anh.length - 1;
    }
    img.src = mang_anh[index];
}
var x = function next(){
    index++;
    if(index > mang_anh.length-1){
        index = 0;
    }
    img.src = mang_anh[index];
}
var y;
function auto(){
    y = setInterval(x,3000);
}
auto();

function cuonGioHang() {
    const sectionToScrollTo = document.getElementById("giohang"); 

    if (sectionToScrollTo) {
        sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
    }
}

function them(button){
    var row = button.parentElement.parentElement.cloneNode(true);
    
}

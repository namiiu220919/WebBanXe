var mang_anh=["image/banner3.jpeg","image/banner2.jpg","image/banner1.png"];
var img = document.getElementById("anhbanner")
index = 0;

function scrollToTop() {
    window.scrollTo(0, 0);
}

function next(){
    index++;
    if(index > mang_anh.length-1){
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

// ----- thêm vào cart
const btn = document.querySelectorAll("button");
// console.log(btn);
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h3").innerText;
        var productPrice = product.querySelector("span").innerText;
        // console.log(productPrice,productImg,productName);
        addcart(productPrice,productImg,productName);
    }})

})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++){
        var productThem = document.querySelectorAll(".title");
        if(productThem[i].innerHTML == productName){
            alert("Đã có sản phẩm này trong giỏ");
            return;
        }
        console.log(productThem)
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 150px" src="'+productImg+'"><span class="title">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span>đ</p></td> <td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="xoa">Xoá</span></td></tr>';
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    // console.log(cartTable);
    cartTable.append(addtr);
    //hàm tính total
    cartTotal();
    deleteCart();
}
//----- xoá giỏ hàng
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++){
        var productXoa = document.querySelectorAll(".xoa");
        productXoa[i].addEventListener("click",function(event){
            var cartDelete = event.target;
            var itemDelete = cartDelete.parentElement.parentElement;
            itemDelete.remove();
            cartTotal();
            console.log(itemDelete);
        })
    }
}

//----- tính tổng tiền
function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr");
    var totalC = 0;
    // console.log(cartItem.length);
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value;
        // console.log(inputValue);
        var productPrice = cartItem[i].querySelector(".price").innerHTML;
        var newProductPrice = productPrice.split('.').join('');
        // console.log(newProductPrice);
        totalA = inputValue*newProductPrice;
        
        totalC = totalC+totalA;
        // console.log(totalC);
    }
    var cartTotalA = document.querySelector(".total span");
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE');
    inputchange();
}

function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input");
        console.log(inputValue);
        inputValue.addEventListener("change",function(){
            cartTotal();
        })
    }
}
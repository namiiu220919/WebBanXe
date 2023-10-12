function checkName(){
    var name = document.getElementById("name").value;
    var tbName = document.getElementById("tbName");
    if(name ==""){
        tbName.innerHTML="Vui lòng điền Họ tên"
    }else{
        tbName.innerHTML="";
    }
}
function checkEmail(){
    var email = document.getElementById("email").value;
    var tbMail = document.getElementById("tbMail");
    console.log(email.indexOf("@"));
    if(email==""){
        tbMail.innerHTML = "Vui lòng điền Email";
    }else if(email.indexOf("@")==-1){
        tbMail.innerHTML = "Email không hợp lệ";
    }else{
        tbMail.innerHTML = "";
    }
}
function checkPhone(){
    var phone = document.getElementById("phone").value;
    var tbPhone = document.getElementById('tbPhone');

    if(phone == ""){
        tbPhone.innerHTML="Vui lòng điền Số điện thoại";
    }else if(phone.length != 10 && phone.length != 12 ){
        tbPhone.innerHTML="Số điện thoại không hợp lệ";
    }else{
        tbPhone.innerHTML="";
    }
}
function btnSubmit(){
    alert("Đăng kí thành công");
}
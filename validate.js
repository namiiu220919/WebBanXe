function checkName(){
    var name=document.getElementById("name").value;
    var tbname=document.getElementById("tbname");
    

    if(name==""){
        tbname.innerHTML="Họ tên không được để trống";
    }else if(name.length>20){
        tbname.innerHTML="Họ và tên không hợp lệ"
    }else{
        tbname.innerHTML="";
    }
}
function checkDiaChi(){
    var diaChi=document.getElementById("diaChi").value;
    var tbdc=document.getElementById("tbdc");

    if(diaChi==""){
        tbdc.innerHTML="Địa chỉ không được để trống";
    }else if(diaChi.length>30){
        tbdc.innerHTML="Địa chỉ không hợp lệ"
    }else{
        tbdc.innerHTML="";
    }
}
function checkEmail(){
    var email=document.getElementById("email").value;
    var tbemail=document.getElementById("tbemail");
    console.log(email.indexOf("@"));

    if(email==""){
        tbemail.innerHTML="Email không được để trống";
    }else if(email.indexOf("@")==-1){
        tbemail.innerHTML="Email không hợp lệ";
    }else{
        tbemail.innerHTML="";
    }
    
}
function checkPhone(){
    var phone=document.getElementById("phone").value;
    var tbphone=document.getElementById("tbphone");

    if(phone==""){
        tbphone.innerHTML="Phone không được để trống";
    }else if(!phone.length==9|| !phone.length==11){
        tbphone.innerHTML="SĐT không hợp lệ";
    }else{
        tbphone.innerHTML="";
    }
}
var attempt =3
function validate(){
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    if (username=="Formgt" && password =="formget#123") 

{
    alert("Login Succesfully");
    window.location ="success.html";
    return false;
}
else {
    attempt --;
    alert("You have left"+attempt+"attempt;")
    if (attempt ==0){
        document.getElementById("username").disable=true;
        document.getElementById("password").disable=true;
        document.getElementById("submit").disable=true;
        return false;
    }
}
    
}

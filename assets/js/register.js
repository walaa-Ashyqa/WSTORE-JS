

let userName= document.querySelector("#username");
let userEmail= document.querySelector("#useremail");
let userPassword= document.querySelector("#userpassword");
let registerBtn=document.querySelector("#registerBtn");
 
registerBtn.addEventListener("click",function(e){
    e.preventDefault();
if(userName.value ==="" || userEmail.value ==="" || userPassword.value===""  )
{
    alert("Please fill data")
}else{
localStorage.setItem("userName",userName.value);
localStorage.setItem("userEmail",userEmail.value);
localStorage.setItem("userPassword",userPassword.value);
setTimeout( ()=>{window.location="login.html"},1500 )
}
})

function goLogin(){
    location.assign('login.html')
}
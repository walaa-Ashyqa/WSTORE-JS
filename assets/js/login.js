 
let userEmail= document.querySelector("#useremail");
let userPassword= document.querySelector("#userpassword");
let registerBtn=document.querySelector("#registerBtn");
  
let getUserEmail=localStorage.getItem("userEmail");
let getUserPassword=localStorage.getItem("userPassword");
registerBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(!getUserEmail)
   { alert("Please Sign Up.")
    setTimeout( ()=>{window.location="register.html"},1000 )}

if( userEmail.value ==="" || userPassword.value===""  )
{
    alert("Please fill data")
}else{
 if(getUserEmail.trim() ===userEmail.value.trim() && getUserPassword.trim()=== userPassword.value.trim()  )
{ 
    alert("Success login!")
setTimeout( ()=>{window.location="index.html"},1000 )
}else{
    alert("email or password is wrong")
}
}
})
function goRigester(){
    location.assign('register.html')
}
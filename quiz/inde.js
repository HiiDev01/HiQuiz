function firstImage(){
  document.getElementById("first").src="image/two.png";
}
setInterval(firstImage, 2000);

function secondImage(){
  document.getElementById("first").src="image/three.png";
}
setInterval(secondImage, 4000);

function thirdImage(){
  document.getElementById("first").src="image/ques.png";
}
setInterval(thirdImage, 6000);
///////////////////////////////////////////////sign in
const formContainer = document.querySelector(".formContainer");


const signupDiv = document.getElementById("signup-slide");
const loginDive = document.getElementById("login-slide");

const switchLink = document.querySelectorAll(".para-link span a");

switchLink[0].addEventListener("click", ()=>{
  signupDiv.style.transform = "translateX(-100%)";
  loginDive.style.transform = "translateX(0)"
})

switchLink[1].addEventListener("click", ()=>{
  signupDiv.style.transform = "translateX(0)";
  loginDive.style.transform = "translateX(100%)"
})
//email validation
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("name");

function auth(){
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  if (email === "admin@gmail.com" && password ==="admin123"){
    window.location.href = "home_one.html";
    alert("login successful ")
  }else{
    alert("invalid login ");
  }
}



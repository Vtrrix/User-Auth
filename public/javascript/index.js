//For login
let userlabel = document.getElementById("userlabel");
let passlabel = document.getElementById("passlabel");

document.getElementById("username").addEventListener("focus", () => {
  userlabel.style.top = 0;
  userlabel.style.opacity = 1;
});
document.getElementById("username").addEventListener("focusout", () => {
  userlabel.style.top = "40px";
  userlabel.style.opacity = 0;
});
document.getElementById("user_pass").addEventListener("focus", () => {
  passlabel.style.top = 0;
  passlabel.style.opacity = 1;
});
document.getElementById("user_pass").addEventListener("focusout", () => {
  passlabel.style.top = "40px";
  passlabel.style.opacity = 0;
});

//For signup
let userlabel1Signup = document.getElementById("userlabel1Signup");
let userlabel2Signup = document.getElementById("userlabel2Signup");

let maillabelSignup = document.getElementById("maillabelSignup");

let passlabelSignup = document.getElementById("passlabelSignup");
let handlelabel = document.getElementById("handlelabel");

document.getElementById("userhandle").addEventListener("focus", () => {
  handlelabel.style.top = 0;
  handlelabel.style.opacity = 1;
});
document.getElementById("userhandle").addEventListener("focusout", () => {
  handlelabel.style.top = "40px";
  handlelabel.style.opacity = 0;
});
document.getElementById("username1Signup").addEventListener("focus", () => {
  userlabel1Signup.style.top = 0;
  userlabel1Signup.style.opacity = 1;
});
document.getElementById("username1Signup").addEventListener("focusout", () => {
  userlabel1Signup.style.top = "40px";
  userlabel1Signup.style.opacity = 0;
});
document.getElementById("username2Signup").addEventListener("focus", () => {
  userlabel2Signup.style.top = 0;
  userlabel2Signup.style.opacity = 1;
});
document.getElementById("username2Signup").addEventListener("focusout", () => {
  userlabel2Signup.style.top = "40px";
  userlabel2Signup.style.opacity = 0;
});
document.getElementById("mailSignup").addEventListener("focus", () => {
  maillabelSignup.style.top = 0;
  maillabelSignup.style.opacity = 1;
});
document.getElementById("mailSignup").addEventListener("focusout", () => {
  maillabelSignup.style.top = "40px";
  maillabelSignup.style.opacity = 0;
});
document.getElementById("user_passSignup").addEventListener("focus", () => {
  passlabelSignup.style.top = 0;
  passlabelSignup.style.opacity = 1;
});
document.getElementById("user_passSignup").addEventListener("focusout", () => {
  passlabelSignup.style.top = "40px";
  passlabelSignup.style.opacity = 0;
});

//To make signup appear

let createAccLink = document.getElementById("createAccLink");
let signup = document.querySelector(".signup");

if (window.innerWidth >= 1050) {
  createAccLink.addEventListener("click", () => {
    signup.style.width = "35vw";
    signup.style.margin = "5vw";
  });
} else {
  createAccLink.addEventListener("click", () => {
    console.log("hello");
    signup.style.height = "fit-content";
    signup.style.margin = "5vw";
  });
}

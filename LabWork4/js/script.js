function registerToogle(){
    sign_in_button.style.background = "#333333";
    sign_up_button.style.backgroundColor = "rgb(178, 193, 194)";
    alert("Button changed!");



}

var sign_up_button = document.getElementById("btn1");
var sign_in_button = document.getElementById("btn2");
sign_in_button.addEventListener("click", registerToogle);



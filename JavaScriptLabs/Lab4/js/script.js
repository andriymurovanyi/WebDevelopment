let open_button = document.getElementById("alarmButton");
let close_button = document.getElementById("close_alarm");
let reg_button = document.getElementById("regButton");
let alarmForm = document.getElementById("alarmForm");



open_button.addEventListener("click", function () {
    alarmForm.classList.remove("invisible");
    alarmForm.classList.add("visible");
});

close_button.addEventListener("click", function () {
    alarmForm.classList.remove("visible");
    alarmForm.classList.add("invisible");
    document.getElementById("login_field").value = '';
    document.getElementById("password_field").value = '';
    document.getElementById("confirm_field").value = '';
});

function get_data(){
    let login_field = document.getElementById("login_field");
    let password_field = document.getElementById("password_field");
    let confirm_field = document.getElementById("confirm_field");
    let login, password, confirmed_password;

    var r = login_field.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/);

    if (login_field.value.trim().length === 0 || !r){
        alert("E-mail missed or incorrect!")
    }
    else{
        login = login_field.value;
        if (password_field.value.trim().length < 6){
            alert("Password must be at least of 6 symbols!")
        }
        else{
            password = password_field.value;
            if (password_field.value.trim() !== confirm_field.value.trim()){
                alert("Passwords different! ")
            }
            else {
                confirmed_password = password_field.value;
                console.log('Yes!');
                console.log(login + "\n" + password +
                    "\n" + confirmed_password);
                alert("Thanks for registration!");
            }
        }
    }
}

// alarmForm.onmousedown = function(e) {
//
//     let coords = getCoords(alarmForm);
//     let shiftX = e.pageX - coords.left;
//     let shiftY = e.pageY - coords.top;
//
//     alarmForm.style.position = 'absolute';
//     document.body.appendChild(alarmForm);
//     moveAt(e);
//
//     alarmForm.style.zIndex = 1000; // над другими элементами
//
//     function moveAt(e) {
//         alarmForm.style.left = e.pageX - shiftX + 'px';
//         alarmForm.style.top = e.pageY - shiftY + 'px';
//     }
//
//     document.onmousemove = function(e) {
//         moveAt(e);
//     };
//
//     alarmForm.onmouseup = function() {
//         document.onmousemove = null;
//         alarmForm.onmouseup = null;
//     };
//
// };
//
// function getCoords(elem) {   // кроме IE8-
//     let box = elem.getBoundingClientRect();
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }

reg_button.addEventListener("click", get_data);


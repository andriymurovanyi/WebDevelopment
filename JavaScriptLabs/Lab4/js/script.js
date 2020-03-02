const open_button = document.getElementById("alarmButton");
const close_button = document.getElementById("close_alarm");
const reg_button = document.getElementById("regButton");
const alarmForm = document.getElementById("alarmForm");


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
    const login_field = document.getElementById("login_field");
    const password_field = document.getElementById("password_field");
    const confirm_field = document.getElementById("confirm_field");

    const r = login_field.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/);

    if (login_field.value.trim().length === 0 || !r){
        alert("E-mail missed or incorrect!")
    }
    else{
        const login = login_field.value;
        
        if (password_field.value.trim().length < 6){
            alert("Password must be at least of 6 symbols!")
        } else {
            const password = password_field.value;
            
            if (password_field.value.trim() !== confirm_field.value.trim()){
                alert("Passwords different! ")
            }
            else {
                const confirmed_password = password_field.value;
                console.log('Yes!');
                console.log(login + "\n" + password +
                    "\n" + confirmed_password);
                alert("Thanks for registration!");
            }
        }
    }
}

reg_button.addEventListener("click", get_data);


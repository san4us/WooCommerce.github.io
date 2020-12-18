let logIn = document.querySelector('.logIn');

let modal = document.getElementById("my_modal");

let btn = document.getElementById("btn_modal_window");
let subBtn = document.getElementsByClassName("redirect_modal_window")[0];
let closeBtn = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

subBtn.onclick = function () {
    modal.style.display = "none";

}

closeBtn.onclick = function () {
    modal.style.display = "none";

}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
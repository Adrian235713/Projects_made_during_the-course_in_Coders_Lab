document.addEventListener("DOMContentLoaded", function() {

    const submitName = document.querySelector("#userNameSubmit");
    const userName = document.querySelector("#userName");
    const name = document.querySelector("#name");
    const welcome = document.querySelector("#welcome");
    const pulpit = document.querySelector("#pulpit");

    //modals przepis/recipe + plan/schedule
    const modalR = document.getElementById("myModalR");
    const modalS = document.getElementById("myModalS");
    const btnR = document.getElementById("myBtnRecipe");
    const btnS = document.getElementById("myBtnSchedule");
    const spanR = document.getElementsByClassName("closeR")[0];
    const spanS = document.getElementsByClassName("closeS")[0];

    btnR.onclick = function () {
        modalR.style.display = "block";
    }

    btnS.onclick = function () {
        modalS.style.display = "block";
    }

    spanR.onclick = function () {
        modalR.style.display = "none";
    }

    spanS.onclick = function () {
        modalS.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modalR) {
            modalR.style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target === modalS) {
            modalS.style.display = "none";
        }
    }

    // --- //

    name.innerText = localStorage.getItem(`savedName`);
    if (name.innerText !== "") {
        welcome.style.visibility = "hidden";
        pulpit.style.visibility = "visible";
    }

    submitName.addEventListener("click", function(event) {
        event.preventDefault();
        let newName = userName.value;
        localStorage.setItem('savedName', newName);
        name.innerText = localStorage.getItem(`savedName`);

        if (name.innerText !== "") {
            welcome.style.visibility = "hidden";
            pulpit.style.visibility = "visible";
        }
    })
});
const button = document.getElementById("btn-modo");

if (button) {

    button.addEventListener("click", function() {
        document.body.classList.toggle("modo-oscuro");
        if (document.body.classList.contains("modo-oscuro")) {
            localStorage.setItem("modo-oscuro");
        } else {
            localStorage.setItem("body");
        }
    });

}

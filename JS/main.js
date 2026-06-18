const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "oscuro") {
document.body.classList.add("modo-oscuro");
}

const button = document.getElementById("btn-modo");

if (button) {

    button.addEventListener("click", function() {
        document.body.classList.toggle("modo-oscuro");
        if (document.body.classList.contains("modo-oscuro")) {
            localStorage.setItem("tema", "oscuro");
        } else {
            localStorage.setItem("tema", "claro");
        }
    });

}
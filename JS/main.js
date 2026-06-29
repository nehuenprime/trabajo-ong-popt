const temaCache = localStorage.getItem("tema");

if (temaCache === "oscuro") {
    document.body.classList.add("modo-oscuro");
}

const button = document.getElementById("btn-modo");

if (button) {
    button.addEventListener("click", function () {
        document.body.classList.toggle("modo-oscuro");
        if (document.body.classList.contains("modo-oscuro")) {
            localStorage.setItem("tema", "oscuro");
        } else {
            localStorage.setItem("tema", "claro");
        }
    })
}

//Todo esto de acá es para el formulario
const formNewsletter = document.getElementById("form-newsletter");
const inputEmail = document.getElementById("exampleInputEmail1");
const msgNewsletter = document.getElementById("msg-newsletter");
const msgNewsletter2 = document.getElementById("msg-newsletter2");
const msgNewsletter3 = document.getElementById("msg-newsletter3");
const inputNombre = document.getElementById("exampleInputPassword1");
const inputTelefono = document.getElementById("exampleInputPassword2");

if (formNewsletter) {

    formNewsletter.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = inputEmail.value.trim();
        const nombre = inputNombre.value.trim();
        const telefono = inputTelefono.value.trim();

        msgNewsletter.textContent = "";
        msgNewsletter2.textContent = "";
        msgNewsletter3.textContent = "";

        let formularioValido = true;

        if (email.length < 4 || !email.includes("@") || !email.includes(".com")) {
            msgNewsletter.textContent = "Por favor ingresa un email válido.";
            msgNewsletter.style.color = "#de1919";
            formularioValido = false;
        }

        if (nombre.length < 3) {
            msgNewsletter2.textContent = "Por favor ingresa un nombre válido.";
            msgNewsletter2.style.color = "#de1919";
            formularioValido = false;
        }

        if (telefono.length < 6) {
            msgNewsletter3.textContent = "Por favor ingresa un numero válido.";
            msgNewsletter3.style.color = "#de1919";
            formularioValido = false;
        }

        if (!formularioValido) {
            return;
        }

        msgNewsletter3.textContent = `¡Gracias ${nombre}! Vas a recibir noticias en ${email}`;
        msgNewsletter3.style.color = "#1A6B2A";

        formNewsletter.reset();
    });

}


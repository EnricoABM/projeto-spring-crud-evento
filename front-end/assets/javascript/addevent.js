
const form = document.getElementById('form-container');
form.addEventListener('submit', addEvent);

async function addEvent() {
    const dataForm = new FormData(form);
    const event = Object.fromEntries(dataForm);
    const option = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(event)
    };
    const response = await fetch("http://localhost:8080/event/add", option);
    if (response.status === 201) {
        alert("Evento cadastrado com sucesso");
        window.location.href = "listallevents.html";
    } else {
        alert("Falha ao cadastrar");
    }

}
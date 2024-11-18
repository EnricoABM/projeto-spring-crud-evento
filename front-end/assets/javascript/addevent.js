
const form = document.getElementById('form');
form.addEventListener('submit', addEvent);

async function addEvent() {
    const dataForm = new FormData(form);
    const event = Object.fromEntries(dataForm);
    const option = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(event)
    };

    if (validateTime(event)) {
        const response = await fetch("http://localhost:8080/event/add", option);
        if (response.status === 201) {
            alert("Evento cadastrado com sucesso");
            window.location.href = "listallevents.html";
        } else {
            alert("Falha ao cadastrar");
        }
    } else {
        alert('Horário Inválido');
    }

}

function validateTime(event) {
    let initial = event.horarioInicio.split(":");
    let final = event.horarioTermino.split(":");

    let initalTime = parseInt(initial[0]) * 60 + parseInt(initial[1]);
    let finalTime = parseInt(final[0]) * 60 + parseInt(final[1]);

    if (initalTime < finalTime) {
        return true;
    } else {
        return false;
    }
}
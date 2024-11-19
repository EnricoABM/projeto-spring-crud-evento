async function getEvent() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const response = await fetch(`http://localhost:8080/event/list/${id}`);
    if (response.status === 200) {
        const event = await response.json();
        return event;
    } else {
        throw new TypeError();
    }
}

async function fullFields() {
    try {
        const event = await getEvent();
        document.getElementById('id').value = event.id;
        document.getElementById('titulo').value = event.titulo;
        document.getElementById('descricao').value = event.descricao;
        document.getElementById('data').value = event.data;
        document.getElementById('horarioInicio').value = event.horarioInicio;
        document.getElementById('horarioTermino').value = event.horarioTermino;
        document.getElementById('endereco').value = event.endereco;
        document.getElementById('qtdIngressos').value = event.qtdIngressos;
        document.getElementById('precoIngresso').value = event.precoIngresso;
        document.getElementById('organizador').value = event.organizador;
    } catch (error) {
        alert("ID inválido. Você será redirecionado");
        window.location.href = "listallevents.html";
    }
}

async function updateEvent() {
    const dataForm = new FormData(form);
    const event = Object.fromEntries(dataForm);

    if (validateTime(event)) {
        const option = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(event)
        };
        const response = await fetch("http://localhost:8080/event/update", option);
        if (response.status === 201) {
            alert('Evento atualizado com sucesso');
            window.location.href = "listallevents.html";
        } else {
            alert('Falha ao atualizar');
        }
    } else {
        alert("Horário Inválido");
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

const form = document.getElementById('form');
form.addEventListener('submit', updateEvent);

fullFields();

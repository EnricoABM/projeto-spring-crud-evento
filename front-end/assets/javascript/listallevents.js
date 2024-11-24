const button = document.getElementById('btn-get-all-events-button');
button.addEventListener('click', getAllEvents);

async function getAllEvents() {
    await fetch("http://localhost:8080/event/listall")
        .then(response => {
            return response.json()
        })
        .then(data => {
            showEvents(data);
            const msg = document.getElementById('mensagem');
            const txtField = document.getElementById('txtid');

            msg.innerHTML = 'Mensagem: Consulta realizada com sucesso.';
            txtField.value = "";
        })
        .catch(error => alert('Falha ao consultar todos os eventos'));
}

function showEvents(events) {
    const table = document.getElementById('table-result');

    let rows = "";
    for (let event of events) {
        rows += `
            <tr>
                <td>${event.id}</td>
                <td>${event.titulo}</td>
                <td>${event.descricao}</td>
                <td>${formatDate(event.data)}</td>
                <td>${formatTime(event.horarioInicio)}</td>
                <td>${formatTime(event.horarioTermino)}</td>
                <td>${event.endereco}</td>
                <td>${event.qtdIngressos}</td>
                <td>${event.precoIngresso}</td>
                <td>${event.organizador}</td>
                <td>
                    <a class="edit-icon">
                        <img src="../assets/imgs/edit.svg" onclick="editForm(${event.id})" alt="Edit Icon">
                    </a>
                </td>
                <td>
                    <a class="trash-icon">
                        <img src="../assets/imgs/trash.svg" onclick="removeEvent(${event.id})" alt="Trash Icon">
                    </a>
                </td>
            </tr>
        `;
    }
    table.innerHTML = rows;
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', {timeZone: "UTC"})
}

function formatTime(time) {
    let [hour, minute, second] = time.split(':');
    return `${hour}:${minute}`;
}

async function removeEvent(id) {

    if (!confirm('Deseja deletar o evento?')) {
        return ;
    }

    const option = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    };
    
    const response = await fetch(`http://localhost:8080/event/delete/${id}`, option);
    
    
    const mensagem = document.getElementById('mensagem');
    if (response.status === 204) {
        await getAllEvents();
        
        mensagem.innerHTML = "Mensagem: Deletado com Sucesso";
    } else {
        mensagem.innerHTML = "Mensagem: Falha ao Deletar";
    }
}

async function editForm(id) {
    const response = await fetch(`http://localhost:8080/event/list/${id}`);
    const event = await response.json();
    const params = new URLSearchParams({
        id: event.id
    }).toString();

    window.location.href = `editform.html?${params}`;
}

getAllEvents();
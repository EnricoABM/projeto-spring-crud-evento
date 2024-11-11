

const buttonGetById = document.getElementById('btn-get-events-by-id');
const txtField = document.getElementById('txtid');

buttonGetById.addEventListener('click', getElementById);
txtField.addEventListener('focus', selectText)


async function getElementById() {
    const input = document.getElementById('txtid');
    const id = input.value;

    if (id.length < 1) {
        alert('Digite um ID inválido');
        return;
    }

    const url = `http://localhost:8080/event/list/${id}`;

    const msg = document.getElementById('mensagem');

    const response = await fetch(url);
    if (response.status === 200) {
        const dados = await response.json();
        showEvent(dados);
        msg.innerHTML = 'Mensagem: Evento Encontrado';
    } else {
        msg.innerText = 'Mensagem: Evento não Encontrado';
        emptyTable();
    }
}

function showEvent(event) {
    const table = document.getElementById('table-result');
    const row = `
        <tr>
            <td>${event.id}</td>
            <td>${event.titulo}</td>
            <td>${event.descricao}</td>
            <td>${event.data}</td>
            <td>${event.horarioInicio}</td>
            <td>${event.horarioTermino}</td>
            <td>${event.endereco}</td>
            <td>${event.qtdIngressos}</td>
            <td>${event.precoIngresso}</td>
            <td>${event.organizador}</td>
            <td>
                <img src="../assets/imgs/edit.svg" class="edit-icon" onclick="editEvent(${event.id})" alt="Edit Icon">
            </td>
            <td>
                <img src="../assets/imgs/trash.svg" class="trash-icon" onclick="removeEvent(${event.id})" alt="Trash Icon">
            </td>
        </tr>
    `;
    table.innerHTML = row;
}

function emptyTable() {
    const table = document.getElementById('table-result');
    table.innerHTML = "";
}

function selectText(test) {
    test.target.select();
}
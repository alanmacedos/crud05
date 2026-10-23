import { save, edit, removeData, searchAll } from "./firebase/crud.js";

const form = document.getElementById("form");
const ulElement = document.getElementById("ulElement");

updateList();

let editingID = null;

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const task = document.getElementById("task").value;
    const status = document.getElementById("status").value;

    if (!editingID) {
        await save(task, status)
    } else {
        await edit(editingID, task, status);
    }

    form.reset();

    await updateList()
})

async function updateList() {

    const data = await searchAll();

    const tasks = Object.entries(data).map(([id, item]) => {

        return {
            id: id,
            task: item.task,
            status: item.status
        }
    })

    ulElement.innerHTML = "";

    tasks.forEach((item) => {

        const li = document.createElement("li");

        const task = document.createElement("span");
        task.textContent = item.task;

        const status = document.createElement("span");
        status.textContent = item.status;

        const btnEdit = document.createElement("button");
        btnEdit.textContent = "Edit";

        btnEdit.addEventListener("click", async (event) => {

            await editTask(item);
        })

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "Remove";

        btnRemove.addEventListener("click", async (event) => {

            await removeTask(item.id);
        })

        li.appendChild(task);
        li.appendChild(status);
        li.appendChild(btnEdit);
        li.appendChild(btnRemove);
        
        ulElement.appendChild(li);
    })
}

async function editTask(item) {

    editingID = item.id;

    document.getElementById("task").value = item.task;
    document.getElementById("status").value = item.status;
}

async function removeTask(id) {

    const confirmation = confirm("Deseja remover esta tarefa?");

    if (!confirmation) {
        return;
    }

    await removeData(id);

    updateList();
}
import { database } from "./fbConfig.js";
import {
    get,
    ref,
    push,
    set,
    remove,
    update,
    child,
 } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

 const tasksRef = ref(database, "tasks");

 async function save(task, status) {
    const newItemRef = await push(tasksRef);
    await set(newItemRef, {task, status});
 }

 async function edit(id, task, status) {
    const itemRef = await child(tasksRef, id);
    await update(itemRef, {task, status});
 }

 async function removeData(id) {
    const itemRef = await child(tasksRef, id);
    await remove(itemRef);
 }

 async function searchAll() {
    const snapshot = await get(tasksRef);
    return snapshot.exists() ? snapshot.val() : {};
 }

 export { save, edit, removeData, searchAll };
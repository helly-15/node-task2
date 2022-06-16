import {writeDataToFile} from "../utils.js";
import * as path from "path";
import {readFile} from "fs/promises";
import {fileURLToPath} from "url";
import {dirname} from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let filePath = path.join(__dirname,'../','data', 'usersCreated.json');

let users = [];

export async function readUsers() {
    let usersData = await readFile(filePath, "utf-8")

    return JSON.parse(usersData)
}

export async function findAll() {
    users = await readUsers();
    return new Promise((resolve) => {
        resolve(users)
    })
}

export async function findById(id) {
    users = await readUsers();
    return new Promise((resolve) => {
        const user = users.find((userItem) => userItem.id === id)
        resolve(user)
    })
}

export async function create(newUser) {
    users = await readUsers();

    return new Promise((resolve) => {
        users.push(newUser);

        writeDataToFile(path.resolve('data', 'usersCreated.json'), users);
        resolve(newUser)
    })
}

export async function update(id, updatedUser) {
    users = await readUsers();

    return new Promise((resolve) => {
        const index = users.findIndex(p=>p.id === id)
        users[index] = {id, ...updatedUser}
        writeDataToFile(path.resolve('data', 'usersCreated.json'), users);
        resolve(users[index])
    })
}
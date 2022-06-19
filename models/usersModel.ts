import {writeDataToFile} from "../utils.js";
import * as path from "path";
import {readFile} from "fs/promises";
import {fileURLToPath} from "url";
import {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let filePath = path.join(__dirname, '../../', 'data', 'usersCreated.json');

let users = [];

export type IUser = { hobbies: string[]; id: string; age: number; username: string }

export async function readUsers(): Promise<IUser[]> {
    let usersData = await readFile(filePath, "utf-8")

    return JSON.parse(usersData)
}

export async function findAll() {
    users = await readUsers();
    return new Promise((resolve) => {
        resolve(users)
    })
}

export async function findById(id): Promise<IUser> {
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

        writeDataToFile(path.resolve('../', 'data', 'usersCreated.json'), users);
        resolve(newUser)
    })
}

export async function update(id, updatedUser) {
    users = await readUsers();

    return new Promise((resolve) => {
        const index = users.findIndex(u => u.id === id)
        users[index] = {id, ...updatedUser}
        writeDataToFile(path.resolve('../', 'data', 'usersCreated.json'), users);
        resolve(users[index])
    })
}

export async function remove(id) {
    users = await readUsers();

    return new Promise((resolve) => {
        users = users.filter(u => u.id !== id)
        writeDataToFile(path.resolve('../', 'data', 'usersCreated.json'), users);
        resolve({})
    })
}

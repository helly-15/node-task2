import { v4 as uuidv4 } from 'uuid';
import { writeFile, access } from 'node:fs/promises';
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let filePath = path.join(__dirname, 'usersCreated.json');
let users = [];
export async function createData(numberOfUsers){
    let hobbies = ['dancing', 'swimming', 'sailing', 'drawing'];
    let username = ['Lena', 'Vera', 'Zina', 'Vova'] ;
    try {
        await access(filePath);
    } catch {
        for (let i = 0; i < numberOfUsers; i++) {
            let userHobbies = [hobbies[Math.floor(Math.random() * username.length)], hobbies[Math.floor(Math.random() * username.length)]]
            users.push({
                "id": uuidv4(),
                "username": username[Math.floor(Math.random() * username.length)],
                "age": Math.floor(Math.random() * 100),
                "hobbies": userHobbies
            });
        }
        await writeFile(filePath, JSON.stringify(users) );
    }


}
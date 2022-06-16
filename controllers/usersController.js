import {create, findAll, findById} from '../models/usersModel.js';
import {getPostData} from "../utils.js";
import {v4 as uuidv4} from "uuid";

export async function getUsers(req, res) {
    const users = await findAll()
    try {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    } catch (error) {
        console.log(error)
    }
}

export async function getUser(req, res, id) {
    try {
        if (!id.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/)) {
            res.writeHead(400, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Incorrect uuid'}))
        }
        const user = await findById(id)
        if (!user) {
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'User not found'}))
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(user))
        }

    } catch (error) {
        console.log(error)
    }
}

export async function createUser(req, res) {
    try {
        const body = await getPostData(req);
        const {username, age, hobbies} = JSON.parse(body);
        const newUser = {
            id: uuidv4(),
            username,
            age,
            hobbies
        }
        const userAdded = await create(newUser);
        res.writeHead(201, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(userAdded))
    } catch (error) {
        console.log(error)
    }
}
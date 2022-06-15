import {findAll} from '../models/usersModel.js';

export async function getUsers(req, res) {
    const users = await findAll()
    try {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    } catch (error) {
        console.log(error)
    }
}
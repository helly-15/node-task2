import {findAll, findById} from '../models/usersModel.js';

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
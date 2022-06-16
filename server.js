import http from 'http';
import {createUser, getUser, getUsers, updateUser, deleteUser} from "./controllers/usersController.js";
import {createData} from "./data/createData.js";

const PORT = process.env.PORT || 5000;
await createData(3);
const server = http.createServer((req, res) => {

    if (req.url === '/api/users' && req.method === 'GET') {
        getUsers(req, res)
    } else if (req.url.match(/\/api\/users\//) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getUser(req, res, id)
    } else if (req.url === '/api/users' && req.method === 'POST') {
        createUser(req, res)
    } else if (req.url.match(/\/api\/users\//) && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        updateUser(req, res, id)
    } else if (req.url.match(/\/api\/users\//) && req.method === 'DELETE') {
        const id = req.url.split('/')[3]
        deleteUser(req, res, id)
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route not found'}))
    }

})
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
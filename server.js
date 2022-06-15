import http from 'http';
import {getUsers} from "./controllers/usersController.js";

const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        getUsers(req, res)
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route not found'}))
    }

})
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
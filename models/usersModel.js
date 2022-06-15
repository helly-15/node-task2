import users from '../data/users.json' assert {type: 'json'};

export function findAll() {
    return new Promise((resolve, reject) => {
        resolve(users)
    })
}
import users from '../data/users.json' assert {type: 'json'};

export function findAll() {
    return new Promise((resolve, reject) => {
        resolve(users)
    })
}

export function findById(id) {
    return new Promise((resolve, reject) => {
        const user = users.find((userItem) => userItem.id === id)
        resolve(user)
    })
}
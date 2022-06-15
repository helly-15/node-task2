
let users = [];
export async function findAll() {
    users  =
        await import('../data/usersCreated.json', {
            assert: {
                type: "json",
            },
        });
    return new Promise((resolve, reject) => {
        resolve(users.default)
    })
}

export async function findById(id) {
    users =
        await import('../data/usersCreated.json', {
            assert: {
                type: "json",
            },
        });
    return new Promise((resolve, reject) => {
        const user = users.default.find((userItem) => userItem.id === id)
        resolve(user)
    })
}
import * as fs from "fs";

export function getPostData(req) : Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body);
            })
        } catch (error) {
            reject(error)
        }
    })
}
export function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8')
}

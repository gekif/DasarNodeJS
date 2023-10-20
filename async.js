const fs = require('fs')

const myFunction = (file) => new Promise((resolve, reject) => {
    setTimeout( () => {
        fs.readFile(file, 'utf-8', (err, data) => {
        if (data) {
            resolve(data)
        } else {
            reject(data)
        }
    })
    }, 500)    
})

// const myAsyncFunction = async () => {
//     const content = await myFunction ('./hello.txt')
//     console.log(content)
// }

// Menambahkan fungsi error
const myAsyncFunction = async () => {
    let content
    
    try {
        const content = await myFunction ('./hello.txt')
        console.log(content)
    } catch (error) {
        console.log(error)
    }
} 

myAsyncFunction()
console.log('Hi')
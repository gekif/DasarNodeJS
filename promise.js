const fs = require('fs')

// const myFunction = (file) => new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf-8', (err, data) => {
//         if (data) {
//             resolve(data)
//         } else {
//             reject(data)
//         }
//     })
// })

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

myFunction('./hello.txt')
    .then(content => console.log(content))
    .catch(err => console.log(err))

console.log('Node JS')
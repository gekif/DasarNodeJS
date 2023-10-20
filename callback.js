// const myFunction = (str, fn) => {
//     console.log(str)
//     fn()
// }

const myFunction = (str, fn) => {
    setTimeout(() =>  {
    console.log(str)
    fn()
    }, 500)
}


// myFunction('Hello', () => console.log('world!'));
// console.log('world')
// console.log('Node JS')


/**
 * Buat file sistem
 */

const fs = require('fs')

// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//     console.log(data)
// })

fs.readFile('./helloa.txt', 'utf-8', (err, data) => {
    console.log(err)
    console.log(data)
})
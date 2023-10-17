// var x = 10
// let y = 11
// const z = 12

// Use Function
function myFunction() {
    var x = 10
    let y = 11
    const z = 12    
    console.log(x, y, z);
}

function loopVar() {
    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
}

function loopLet() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

function loopConst() {
    for (const i = 0; i < 10; i++) {
        console.log(i)
    }
}


// console.log(x, y, z);
// myFunction();

loopVar();
loopLet();

// const tidak bsisa di loop karena nilai variabel sudah fix
// untuk var dan let masih diperbolehkan nilai dalam variabel bertambah
loopConst();
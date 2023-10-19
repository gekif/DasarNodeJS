const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map  untuk  kali 2
const mapX = x.map(i => i * 2);

// Filter dari x
const filterX = x.filter(i => i % 2 == 0);

// Menjumlahkan isi x
// const reduceX = x.reduce((res, i) => res += i);
const reduceX = x.reduce((res, i) => res.concat([i]), [11,12]);

console.log(x);
console.log(mapX);
console.log(filterX);
console.log(reduceX);
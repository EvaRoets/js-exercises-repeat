const localMovies = [
    `no time to die`,
    `the eternals`,
    `ghostbusters: afterlife`,
    `dune`,
    `the power of the dog`,
    `dealer`,
    `venom`,
    `red sandra`,
    `the french dispatch`,
];


document.write(`<ul>`);
for (let i = 0; i < localMovies.length; i++) {
    document.write(`<li>${localMovies[i]}</li>`);
}
document.write(`</ol>`);
const localMovies = [
    `No Time To Die`,
    `the eternals`,
    `ghostbusters: afterlife`,
    `DUNE`,
    `the power of the dog`,
    `dealer`,
    `venom`,
    `red sandra`,
    `the french dispatch`,
];

localMovies.reverse();
const lowerCaseMovies = localMovies.map(localMovie => localMovie.toLowerCase());

document.write(`<ul>`);
for (let i = 0; i < lowerCaseMovies.length; i++) {
    document.write(`<li>${lowerCaseMovies[i]}</li>`);
}
document.write(`</ul>`);




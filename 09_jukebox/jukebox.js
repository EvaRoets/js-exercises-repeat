// const music = [
const music = [

    {
        title: 'Friday',
        author: 'Rebecca Black',
        genre: 'pop',
        moments: [
            'friyay'
        ],
    },
    {
        title: 'Sonne',
        author: 'Rammstein',
        genre: 'hardrock',
        moments: [
            'afternoon dip',
            'friyay'
        ],
    },
    {
        title: 'Addicted to you',
        author: 'Avicii',
        genre: 'pop',
        moments: [
            'work'
        ],
    },
    {
        title: 'Baiana',
        author: 'Bakermat',
        genre: 'electronic',
        moments: [
            'work',
            'friyay'
        ],
    },
    {
        title: 'Teach me',
        author: 'Bakermat',
        genre: 'pop',
        moments: [
            'work'
        ],
    },
]


// Following to-dos can all be done separately
// If there is no restriction mentioned in the task, you can use all language features you want to use
// Best of luck! 🎶

// --- Basics ---
// TODO: select the author of Baiana
music.forEach((songs) => {
    console.log(music[3].author);
});



// TODO: log all song titles
// TODO: use the find function to select the song by Rammstein
// TODO: do the same to select all songs by Bakermat. Is the find function the right choice here? If not, what would be a better one? (don't use for or foreach)


// --- Basics ---
// TODO: select the author of Baiana
// music.forEach(function(collection){
//     console.log (music[3].author);
// });

// TODO: log all song titles
// music.forEach((collection) => {
//     console.log(collection.title);
// });

// TODO: use the find function to select the song by Rammstein
// const songRammstein = music.find((collection) => {
//     return collection.title === 'Sonne'
// });
// console.log(songRammstein)

// TODO: do the same to select all songs by Bakermat. Is the find function the right choice here? If not, what would be a better one? (don't use for or foreach)
// const songsBakermat = music.filter((collection) => {
//     return collection.author === "Bakermat";
// });
// console.log(songsBakermat);


// --- Intermediate ---
// TODO: log all pop songs
// const popSongs = music.filter((collection) => {
//     return collection.genre === "pop";
//     });
// console.log (popSongs);

// TODO: write a function that always returns the first song (full object is okay)
// const firstSong = music[0];
// console.log (firstSong);

// TODO: write a function that will return a song at the index of your choosing. You may not use a global var for this index
const chooseSong = () => {

}

// TODO: write a function that will return a random song. Use a separate function for the random selection
// const randomSongSelection = () => {
//     let randomSong = music[Math.floor(Math.random() * music.length)];
//     console.log(randomSong);
// };
// randomSongSelection();

// --- Advanced ---
// TODO: write a function that will suggest you a random song from a genre of your chosing. You may use any techniques you want, but try to think about which ones make most sense
// TODO: write a function that will show all songs (full object is okay) that fit your moment choice. Use the filter function
// TODO: sort all songs from a certain genre alphabetically. You may not use for or foreach

// --- Master ---
// TODO: write a function that will show all songs by a certain author. It should be possible to search on parts of the name (e.g. a search for "baker" should return two songs)
// TODO: write a function that asks for your moment and genre preference and returns the title of all song matching your criteria. Use the filter function
// TODO: write a function that asks for your moment and genre preference and returns the title of all song matching your criteria. If a preference is not given, then no filter is applied for that category
// TODO: get a list of all the possible moments related to the songs. No duplicate moments may exist

// --- Over 9000 ---
// TODO: write a function that will search for songs based on author, genre and moment. Use an object called searchCriteria to contain these

// --- Overarchiever ---
// TODO: start a band and write a song that you hear once, and is in your mind for the rest of the day. We've all suffered from those, right? Get world-famous. Earn millions. Resist a path leading to the 26th club. Get into IT. Replace the songs in the list with your own.
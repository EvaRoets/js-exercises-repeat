// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
    let run = document.getElementById('run');

    run.addEventListener('click', () => {
        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i])
        }
    });
})();

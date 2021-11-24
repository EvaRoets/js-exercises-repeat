// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    let run = document.getElementById('run');

    run.addEventListener('click', () =>{
    fruits[0] = "banana";
    fruits[9] = "kiwi";

        // fruits.shift()
        // fruits.pop()
        // fruits.push('kiwi')
        // fruits.unshift('banana')
        console.log(fruits)
    })
})();

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here

    let run = document.getElementById('run');

    run.addEventListener('click', () => {
        let uniqueFruits = [...new Set(fruits)];
        console.log(uniqueFruits)
    })
})();

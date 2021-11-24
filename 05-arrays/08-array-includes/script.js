// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here

    let run = document.getElementById('run');

    run.addEventListener('click', () => {
        if (fruits.includes('apple')) {
            console.log('Yes, we have some tasty apples for you')
        }else{
            console.log("No apples today")
        }

    })

})();

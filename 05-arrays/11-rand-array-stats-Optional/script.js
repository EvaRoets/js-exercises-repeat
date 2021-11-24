// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let run = document.getElementById('run');

    run.addEventListener('click', () => {

        //generate random array
        let numbers = [];
        for (let i = 1; i <= 10; i++) {
            numbers.push((Math.floor(Math.random() * 100) + 1));
        // display array in table
            document.getElementById(`n-${i}`).innerHTML = numbers[i - 1];
        }

        document.getElementById('min').innerHTML = Math.min(...numbers);
        document.getElementById('max').innerHTML = Math.max(...numbers);
        let sum = numbers.reduce((a,b) => a + b, 0);
        document.getElementById('sum').innerHTML = sum;
        let avg = sum/numbers.length || 0
        document.getElementById('average').innerHTML = avg;
    });

})();

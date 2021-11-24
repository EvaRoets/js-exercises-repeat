// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {

        // your code here
        let number = parseInt(document.getElementById('number').value);
        let result = 1;
        for (let i = 1; i <= number; i++) {
            console.log(result *= i);
        }
    });
})();

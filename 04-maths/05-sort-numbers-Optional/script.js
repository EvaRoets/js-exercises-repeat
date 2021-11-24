// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {

        // your code here
        let numbers = document.getElementById('numbers').value;
        // console.log(numbers)
        let splitNumbers = numbers.split(", ");
        // console.log(splitNumbers)
        splitNumbers.sort((a,b) => {
            return a-b
        })
        alert(splitNumbers)

    });

})();

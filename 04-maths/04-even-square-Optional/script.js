// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        // your code here

        for (let i = 1; i <= 21; i++) {
            if (Math.sqrt(i) % 1 === 0) {
                console.log(i)
            }
        }

    });

})();

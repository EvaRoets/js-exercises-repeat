// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // to get the value of an input: document.getElementById("element-id").value

    let performOperation = function (operation) {
        // perform the operation
        let x = parseInt(document.getElementById('op-one').value);
        let y = parseInt(document.getElementById('op-two').value);

        let result;
        switch (operation) {
            case "addition":
                result = x + y;
                break;
            case "subtraction":
                result = x - y
                break;
            case "multiplication":
                result = x * y
                break;
            case "division":
                result = x / y
                break;
        }
        alert(result);
        console.log(result)
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);
        });
    });
})();

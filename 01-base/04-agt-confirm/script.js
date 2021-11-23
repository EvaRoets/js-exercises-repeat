// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let age = prompt("Please enter your name");
    let gender = prompt("What is your gender");
    let town = prompt("Which town do you live in?");


    let correctInfo = confirm(`Is the following information correct? 
                    Age: ${age}
                    Gender: ${gender}
                    Town: ${town}`)

    if (correctInfo == true) {
        alert("Thank you for confirming your information")
    } else {
        prompt("Please enter your name");
        prompt("What is your gender");
        prompt("Which town do you live in?");
    }


})();

// Write a function named welcomeMessage

function welcomeMessage(fullName) {
    return function() {
        alert("Welcome " + fullName);
    }
}
// After this function definition, create three variables

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
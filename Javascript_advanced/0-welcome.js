// function that takes two arugments

function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;

    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }
    displayFullName();
}

// Usage Examples:
welcome('Holberton', 'School'); // alert 'Welcome Holberton School!'
welcome('Bob', 'Dylan'); // alert 'Welcome Bob Dylan!'
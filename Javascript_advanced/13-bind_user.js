let user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'Telaviv',
    occupation: 'Engineer'
};

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);

bindLogWelcomeUser('Welcome');
bindLogWelcomeUser('Hello');
bindLogWelcomeUser('Greetings');

// Output:
// Welcome, Buillaume. Your occupation is: Engineer
// Hello, Buillaume. Your occupation is: Engineer
// Greetings, Buillaume. Your occupation is: Engineer
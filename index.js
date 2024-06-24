// Write your code in this file!

const currentUser = 'Monalisa';

//const welcomeMessage = 'Welcome to Flatbook, ';

//const welcomeMessage = currentUser;

//const welcomeMessage = 'Welcome to Flatbook, currentUser';

//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;

//const welcomeMessage = `Welcome to Flatbook, ${currentUser}`;

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);

//const shortGreeting='Welcome, '

//const shortGreeting = `Welcome, ${currentUser}`;  //lacks M at the beginning of my name

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

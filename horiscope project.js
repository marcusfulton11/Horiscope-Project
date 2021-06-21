const randomNumberGenerator = (number) => { // method with parameter
    let randomNum = Math.floor(Math.random() * number); // creates random number
    return randomNum;

};

// creates arrays with info about starSigns and such. 
const astrologyInformation = { // creates method with 3 parameters
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Capricorn', 'Aquarius', 'Pisces'],
    fortune: ['you will have good luck!', 'your luck will be ok', 'you will have very good luck!', 'you will have bad luck!', 'oh no, very bad luck!'],
    advice: ['Take time to know yourself', 'Be patient', 'In order to get, you have to give', 'do your best',
              'Don\'t be afraid of being afraid','Don\'t make decisions when you are angry', 'Don\'t worry what other people think',
               'Do what is right, not what is easy', ' Believe in yourself']
};
const starSigns = { // creates method with a few param
    Aries: 'March 21 – April 20',
    Taurus: 'April 21 – May 20',
    Gemini: 'May 21 – June 21',
    Cancer: 'June 22 – July 22',
    Leo: 'July 23 – August 22',
    Virgo: 'August 23 – September 21',
    Libra: 'September 22 – October 22',
    Scorpio: 'November 23 – December 21',
    Capricorn: 'December 22 – January 20',
    Aquarius: 'January 21 – February 19',
    Pisces: 'February 20 – March 20',
 };

 // To store random message in 'messageData'
 let messageData = []; // empty array
 for (let key in astrologyInformation) {
     let keyValue = astrologyInformation[key]; // creates variable that is equal to the key value in astrologyInformation
     let randomIndex = randomNumberGenerator(keyValue.length); // creates variable that is equal to a random value on the keyValue
     messageData.push(keyValue[randomIndex]); // pushes the random keyValue to the messageData array
 };

 // Main Function. this will log the Message on to the screen 
 const astrologyMessage = (Array) => { // function called astrologyMessage with a param called Array
    let messageToShow = []; // empty array
    let randomSign = Array[0]; // var called randomSign which takes gives a random sign from astrologyInformation[signs]
    let randomFortune = Array[1]; // same but with fortune
    let randomAdvice = Array[2];  // same but with advice
    messageToShow.push(`My guess is that your star sign is - ${randomSign} So, You were born between ${starSigns[randomSign]}`); // adds to empty 'messageToShow' array
    messageToShow.push(`Your luck-metre says - ${randomFortune}`); // adds to empty 'messageToShow' array
    messageToShow.push(`My Advice to you is - "${randomAdvice}"`); // adds to empty 'messageToShow' array
    const theMessageString = messageToShow.join('\n'); // joins the messages together
    console.log(theMessageString); // prints to console.
};

astrologyMessage(messageData); // returns the random message.

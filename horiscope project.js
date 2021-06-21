const randomNumberGenerator = (number) => {
    let randomNum = Math.floor(Math.random() * number);
    return randomNum;

};

// creates arrays with info about starSigns and such. 
const astrologyInformation = {
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Capricorn', 'Aquarius', 'Pisces'],
    fortune: ['you will have good luck!', 'your luck will be ok', 'you will have very good luck!', 'you will have bad luck!', 'oh no, very bad luck!'],
    adivice: ['Take time to know yourself', 'Be patient', 'In order to get, you have to give', 'do your best',
              'Don\'t be afraid of being afraid','Don\'t make decisions when you are angry', 'Don\'t worry what other people think',
               'Do what is right, not what is easy', ' Believe in yourself']
};
const starSigns = {
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
 let messageData = [];
 for (let prop in astrologyInformation) {
     let keyValue = astrologyInformation[prop];
     let randomIndex = randomNumberGenerator(keyValue.length);
     messageData.push(keyValue[randomIndex]);
 };
 
 // Main Function. this will log the Message on to the screen 
 const astrologyMessage = (Array) => {
    let messageToShow = [];
    let dateOfBirth = Array[0];
    messageToShow.push(`My guess is that your star sign is - ${Array[0]} So, You were born between ${starSigns[dateOfBirth]}`);
    messageToShow.push(`Your luck-metre says - ${Array[1]}`);
    messageToShow.push(`My Advice to you is - "${Array[2]}"`);
    const theMessageString = messageToShow.join('\n');
    console.log(theMessageString);
};

astrologyMessage(messageData);

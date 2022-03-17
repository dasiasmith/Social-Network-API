const names = [
  'MarkZeezy',
  'JackDor',
  'KevSys',
  'MikeKriezy',
  'FAANGBang',
  'INeedATechJob',
  'WhosHiring',
  
];

const mail = [
  '123UNoMe@gmail.com',
  'GimmeData@yahoo.com',
  'CodingBytes@hotmail.com',
  'ImTheBoss@outlook.com',
  'DecrepitEmail@aol.com',
  'FullSnack@msn.com',
  'LetsConnect@linkedin.com',
  
];

const thoughtBodies = [
  'Personally, I think my social media platform is better than everyone elses',
  'Does anyone have any advice on the best way to collect data on users without making it look obvious?',
  "I just thought of the perfect user interface, but I think I'll have an ad pop up every 3 seconds",
  'What is the best way to aced a tech interview? #AskBookface',
  'What do you call a one handed pirate that uses React? Captain Hooks',
  'What is a programmers favorite music genre? Algorithm & Blues',
  "I've ran out of puns so at this point please hire me as a developer for your company :)"
];

const possibleReactions = [
  'I disagree!',
  'What a thought provoking question!',
  'This was awesome',
  'Thank you for the great content',
  'Check out this ratio',
  'Like and subscribe to my channel please',
  'First',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random name
const getRandomName = () => getRandomArrItem(names);

// Gets a random name
const getRandomEmail = () => getRandomArrItem(mail);

// Function to generate random thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtBody: getRandomArrItem(thoughtBodies),
      username: getRandomName(),
      reactions: [...getThoughtResponses(3)],
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
const getThoughtResponses = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail, getRandomThoughts, getThoughtResponses };

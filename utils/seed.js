const connection = require('../config/connection');
const { User, Thought } = require('../models');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [
    {
      "_id": "6233fb32b804bf6e0c5e9046",
      "username": "MarkZeezy",
      "email": "markzeezy@gmail.com",
      "thoughts": [
        "6233fe3fb804bf6e0c5e9054"
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "_id": "6233fb4fb804bf6e0c5e9048",
      "username": "JackDor",
      "email": "jackDor@gmail.com",
      "thoughts": [
        "6233fe9db804bf6e0c5e9057"
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "_id": "6233fb75b804bf6e0c5e904b",
      "username": "KevSys",
      "email": "kevSys@gmail.com",
      "thoughts": [
        "6233feebb804bf6e0c5e905a"
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "_id": "6233fb94b804bf6e0c5e904d",
      "username": "FAANGBang",
      "email": "FAANGBang@gmail.com",
      "thoughts": [
        "6233ff25b804bf6e0c5e905d"
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "_id": "6233fbc6b804bf6e0c5e904f",
      "username": "INeedTechJob",
      "email": "gimmeJobPls@gmail.com",
      "thoughts": [
        "6233ff5eb804bf6e0c5e9060"
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    },
    {
      "_id": "6233fbefb804bf6e0c5e9051",
      "username": "WhoHiring",
      "email": "letsConnect@linkedin.com",
      "thoughts": [
        "6233ffaab804bf6e0c5e9063"
      ],
      "friends": [],
      "__v": 0,
      "friendCount": 0
    }
  ]

  const thoughts = [
    {
      "_id": "6233fe3fb804bf6e0c5e9054",
      "thoughtBody": "Personally, I think my social media platform is better than everyone elses",
      "createdAt": "2022-03-18T03:36:31.930Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "_id": "6233fe9db804bf6e0c5e9057",
      "thoughtBody": "Does anyone have any advice on the best way to collect data on users without making it look obvious?",
      "createdAt": "2022-03-18T03:38:05.634Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "_id": "6233feebb804bf6e0c5e905a",
      "thoughtBody": "I just thought of the perfect user interface, but I think I'll have an ad pop up every 3 seconds",
      "createdAt": "2022-03-18T03:39:23.564Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "_id": "6233ff25b804bf6e0c5e905d",
      "thoughtBody": "What do you call a one handed pirate that uses React? Captain Hooks",
      "createdAt": "2022-03-18T03:40:21.075Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "_id": "6233ff5eb804bf6e0c5e9060",
      "thoughtBody": "What is a programmers favorite music genre? Algorithm & Blues",
      "createdAt": "2022-03-18T03:41:18.867Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    },
    {
      "_id": "6233ffaab804bf6e0c5e9063",
      "thoughtBody": "I've ran out of puns so at this point please hire me as a developer for your company :)",
      "createdAt": "2022-03-18T03:42:34.773Z",
      "reactions": [],
      "__v": 0,
      "getReactions": 0
    }
  ]

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);


  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

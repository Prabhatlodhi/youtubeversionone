var nameList = [
    "PewDiePie", "T-Series", "MrBeast", "Dude Perfect", "Whindersson  ", "Badabun", "Shane Dawson", "Felipe Neto", "JuegaGerman", "Ryan Higa", "VanossGaming", "Fernanfloo", "  KondZilla", "El Rubius", "HolaSoyGerman", "NigaHiga", "TheDiamondMinecart", "Liza Koshy", "Willyrex", "Vegetta777", "DanTDM", "StampyLongHead", "Zoella", "KSI", "Markiplier", "SkyDoesMinecraft", "Jacksepticeye", "Smosh", "Miranda Sings", "Rhett and Link", "Fine Brothers  ", "Zach King", "Rosanna Pansino", "Lilly Singh", "  Neistat", "Grace Helbig",
      ];


export function generateRandonName() {
    return nameList[Math.floor( Math.random() * nameList.length )]; 
   
};

var jokes = [
    "The early bird catches the worm", "Actions speak louder than words", "Practice makes perfect", "When in Rome, do as the Romans do", "Honesty is the best policy", "Knowledge is power", "A penny saved is a penny earned", "The pen is mightier than the sword", "You can't judge a book by its cover", "Where there's smoke, there's fire", "Don't count your chickens before they hatch", "If the shoe fits, wear it", "All that glitters is not gold", "When the going gets tough, the tough get going", "People who live in glass houses shouldn't throw stones", "There's no smoke without fire", "A stitch in time saves nine", "Don't put all your eggs in one basket", "Rome wasn't built in a day", "You can't make an omelette without breaking eggs", "Time is money", "The proof of the pudding is in the eating", "Charity begins at home", "Beauty is in the eye of the beholder", "Necessity is the mother of invention", "Where there is life, there is hope", "A bird in the hand is worth two in the bush", "If at first you don't succeed, try, try again", "Every cloud has a silver lining", "The grass is always greener on the other side", "All is fair in love and war", "Don't judge a man until you have walked a mile in his shoes", "There's more than one way to skin a cat"
]

// Randommessage

export function Randommessage() {
    return jokes[Math.floor( Math.random() * jokes.length )]; 
   
};

// export function Randommessage (length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }
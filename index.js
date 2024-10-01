const farmAnimals = "cow horse sheep pig chicken";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

// Strings
const animalSounds = {
  cow: "moo",
  sheep: "baa",
  pig: "oink",
  chicken: "cluck",
  horse: "neigh",
};
const { cow, sheep, pig, chicken } = animalSounds; // horse is excluded

const animals = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken",
};
const { bessie, dolly, babe, little } = animals; // horse is gone, only four animals

const farmAnimals = {
  blackAndWhite: "bessie",
  black: "dolly",
  pink: "babe",
};
const { blackAndWhite, black, pink } = farmAnimals;

// Arrays
const colors = ["blackAndWhite", "black", "pink"];
const [blackAndWhiteColor, blackColor, pinkColor] = colors;

const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const [r, o, y, g, b, , v] = rainbowColors; // indigo is skipped
const [, , , , , indg] = rainbowColors; // only assign indigo

// Objects
const person = {
  name: "Kermit",
  job: "Host",
  partner: "Miss Piggy",
  species: "frog",
  favoriteSong: "Rainbow Connection",
};
const { name, job, partner, species, favoriteSong } = person;

const playlist = [
  "Bein’ Green",
  "Rainbow Connection",
  "It’s Not Easy Bein’ Green",
  "Movin’ Right Along",
];
const [, song2, , song4] = playlist;

const { job: kermitJob, partner: kermitPartner } = person;

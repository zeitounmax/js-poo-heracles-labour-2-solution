const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/** Create the sword and shield */
const sword = new Weapon("⚔️ Sword", 5);
const shield = new Shield("🛡️ Shield", 10);

// Heracles prend l'épée et le bouclier
heracles.setWeapon(sword);
heracles.setShield(shield);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️ ${fighter1.getAttack()} - ${
    fighter2.name
  } 🛡️ ${fighter2.getDefense()} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive()
    ? {
        winner: fighter1,
        loser: fighter2,
      }
    : {
        winner: fighter2,
        loser: fighter1,
      };
};

while (heracles.isAlive() && boar.isAlive()) {
  heracles.fight(boar);
  console.log(roundDisplay(heracles, boar));
  if (!boar.isAlive()) {
    console.log(`${boar.name} is dead!`);
    console.log(`${heracles.name} is victorious!`);
    break;
  }
  boar.fight(heracles);
  console.log(roundDisplay(boar, heracles));
  if (!heracles.isAlive()) {
    console.log(`${heracles.name} is dead!`);
    console.log(`${boar.name} is victorious!`);
    break;
  }
}

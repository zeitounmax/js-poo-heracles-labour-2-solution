const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = null;
    this.shield = null;
  }

  setWeapon(weapon) {
    this.weapon = weapon;
  }

  setShield(shield) {
    this.shield = shield;
  }

  fight(defender) {
    const attackPoints = this.getRandomInt(
      this.strength + (this.weapon ? this.weapon.strengthBonus : 0)
    );

    const defensePoints = defender.getDefense();

    const damages = Math.max(attackPoints - defensePoints, 0);

    defender.life = Math.max(defender.life - damages, 0);
  }

  getAttack() {
    return this.getRandomInt(
      this.strength + (this.weapon ? this.weapon.strengthBonus : 0)
    );
  }

  getDefense() {
    return this.dexterity + (this.shield ? this.shield.protection : 0);
  }

  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;

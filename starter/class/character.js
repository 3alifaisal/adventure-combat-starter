const { Room } = require("./room");

class Character {

  constructor(name, description, currentRoom, health = 100, strength = 10) {
    // Fill this in
    this.name =name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.health  = health ;
    this.strength = strength;
    this.items = [];
    

  }
 

  applyDamage(amount) {
    this.health -= amount;
    // Fill this in
    if (this.health <= 0) {
      this.die()
    }
  }

  die() {
  
    
      // Check if currentRoom is not null before accessing its items property
      if (this.currentRoom !== null) {
        this.currentRoom.items = this.items.slice();
      }

      this.currentRoom = null;
      this.items = [];
      
    

  }

}

module.exports = {
  Character,
};

const {Character} = require('./character');
const {Player} = require("./player");



class Enemy extends Character {
  constructor(name, description, startingRoom,cooldown = 3000,attackTarget = null) {
    super(name,description,startingRoom);
    this.cooldown = cooldown;
    this.attackTarget = attackTarget;
  
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
  
    
    
      if (this.cooldown === 0) {
        // Get the list of rooms connected to the current room
        const connectedRooms = Object.values(this.currentRoom.exits);

        // Check if there are any connected rooms
        if (connectedRooms.length > 0) {
          // Choose a random connected room
          const randomConnectedRoom = connectedRooms[Math.floor(Math.random() * connectedRooms.length)];

          // Move the enemy to the chosen room
          this.currentRoom = randomConnectedRoom;

          // Set cooldown after moving
          this.cooldown = 3000;

         
        }
      }
    

  } 

  


  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = () => {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
     
      this.attackTarget.applyDamage(this.strength);
      this.cooldown = 3000; 
  
}

  applyDamage(amount) {
   
  }




  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      if(this.attackTarget instanceof Player){
        this.attack();
      }
      this.scratchNose();
    
      this.rest();
    }
    
    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};

// const enemy = new Enemy('enemy', 'an ordinary character', room);

// const player = new Player("player", room);
// player.hit("enemy");
// enemy.attack();
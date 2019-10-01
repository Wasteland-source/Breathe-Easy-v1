//A command to hug someone mentioned

module.exports = async function(mention, tag, guild, username, channel, breatheID) {

  try { //Sends a random hug gif if someone has been mentioned
    if (mention !== undefined) {
      const discord = require('discord.js'),
        hugs = ['./Misc/Hugs/HugAdventureTime.gif', './Misc/Hugs/HugCat.gif', './Misc/Hugs/HugMicheal.gif', './Misc/Hugs/HugPokemon.gif', './Misc/Hugs/HugStitch.gif', './Misc/Hugs/HugBatman.gif', './Misc/Hugs/HugFriends.gif', './Misc/Hugs/HugRedPanda.gif', './Misc/Hugs/HugGravityFalls.gif', './Misc/Hugs/HugSupernatural.gif', './Misc/Hugs/HugRacon.gif', './Misc/Hugs/HugKoala.gif', './Misc/Hugs/HugKoalaSmol.gif'];

      channel.send(`${username} has hugged ${mention}`, {
        files: [hugs[Math.floor(Math.random() * hugs.length)]]
      });
      console.log('\x1b[32m%s\x1b[0m', `${guild}:${tag} & ${mention} Hug command success`);
    } else {
      throw error
    }
    return;
  } catch {
    channel.send(`*Breathe Easy looks at you with confusion*\n\nI\'m really sorry i\'m having trouble understanding you. Please follow hug with a mention, For example \"/hug <@${breatheID}>\"`);
    console.log('\x1b[31m%s\x1b[0m', `${guild}:${tag} Hug command fail`);
    return;
  }
}

//A breathing technique to help calm people and help guide them in box breathing

module.exports = async function(tag, guild, channel) {

  try {
    const discord = require('discord.js');
    //Imports discord.js

    console.log('\x1b[32m%s\x1b[0m', `${guild}:${tag} breathe command success`);
    channel.send('This gif is demonstrating \'Box Breathing\' this is a method of breathing used to keep composure in extremely stressful situations by bringing calm and a feeling of control. Following this gif should help relax and sooth you when you feel overwhelmed and out of control.\nI hope this helps you Breathe Easy', {
      files: ['./Misc/Count+breathe/RuleOfFourBreathing.gif']
    });
    return;
  } catch {
    console.log('\x1b[31m%s\x1b[0m', `${guild}:${tag} breathe command fail`);
    channel.send('*Breathe Easy trips over taking the breath command with it*\n\noof! It looks like i tripped up when attempting this command. Please try again');
    return;
  }
}

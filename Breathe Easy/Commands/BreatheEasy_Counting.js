//A counting exercise

module.exports = async function(tag, guild, channel) {

  try {
    const discord = require('discord.js');
    //Importing discord.js

    channel.send('Count along with Finn trying to write on Jake. Focusing on counting brings your attention away from whatever currently stresses you.\nI hope this helps you Breathe Easy', {
      files: ['./Misc/Count+breathe/CountingJakeNotepad.gif']
    });
    console.log('\x1b[32m%s\x1b[0m', `${guild}:${tag} Count command success`)
    return;
  } catch {
    channel.send('*Breathe Easy drops her count command and it shatters*\n\nUh oh! I\'m so sorry i dropped this command! Please try again');
    console.log('\x1b[31m%s\x1b[0m', `${guild}:${tag} Count command fail`);
    return;
  }
}

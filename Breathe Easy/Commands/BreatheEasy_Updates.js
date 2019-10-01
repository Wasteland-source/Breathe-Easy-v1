//Sending updates to users

module.exports = function(tag, guild, channel) {

  try {
    const discord = require('discord.js');

    channel.send('Currently i\'m working on creating a database to store information so you can set reminders, change the prefix and have user specific information Etc.');
    console.log('\x1b[32m%s\x1b[0m', `${guild}:${tag} Update command success`);
    return;
  } catch {
    channel.send('Uhhhhhhmmmmmmm, I can\'t seem to remember how Wasteland was planning to update me at the moment but i may remember later! Try again then');
    console.log('\x1b[31m%s\x1b[0m', `${guild}:${tag} Update command fail`);
    return;
  }
}

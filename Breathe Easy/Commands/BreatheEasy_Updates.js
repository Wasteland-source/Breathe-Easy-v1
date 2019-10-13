//Sending updates to users

module.exports = function(tag, guild, channel) {

  try {
    const discord = require('discord.js'),
    time = new Date();

    channel.send('Currently i\'m working on creating a database to store information so you can set reminders, change the prefix and have user specific information Etc.');
    console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Update command success\n`);
    return;
  } catch {
    channel.send('Uhhhhhhmmmmmmm, I can\'t seem to remember how Wasteland was planning to update me at the moment but i may remember later! Try again then');
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Update command fail\n`);
    return;
  }
}

//A ping command

module.exports = async function(ping, tag, guild, channel) {

  try {
    const discord = require('discord.js'),
    time = new Date();
    //importing discord.js

    channel.send(`It takes me ${ping}ms to wish you a fantastic day\n`);
    console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Ping command success`);
    return;
  } catch {
    channel.send(`*Breathe Easy pats around her pockets searching for something*\n\nI can\'t find my calculator and am unable to provide you with my ping. I\'m sorry!`);
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Ping command fail\n`);
    return;
  }
}

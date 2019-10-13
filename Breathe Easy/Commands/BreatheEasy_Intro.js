//Sending a message when joing a guild

module.exports = async function(tag, guild, channel) {

  try { //Sends a simple block with a welcome message
    const discord = require('discord.js');

    const introBlock = new discord.RichEmbed(),
    time = new Date();

    introBlock.setTitle('Here to help!');
    introBlock.setDescription(`Hello!\n\nI'm Breathe Easy, A bot all about relaxation, happiness and mental health. I will attempt to make sure the members of ${guild} are happier and healthier than they were prior to Breathe Easy being one of the available bots in ${guild}. If there is anything at all you think could be added or changed to improve your experience with Breathe Easy please use the feedback command and let me know.`);
    introBlock.setThumbnail('https://i.imgur.com/HkRBcAV.png');
    introBlock.setColor(0x06b890);
    channel.send(introBlock);
    console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Intro command success\n`);
  } catch {
    channel.send('Nothing makes a better first impression than me failing to complete this command! I\'m good really i promise!')
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Intro command fail\n`)
  }
}

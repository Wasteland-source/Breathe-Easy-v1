//A request system for prompts

module.exports = async function(request, tag, guild, channelFrom, channelTo) {
  try {
    if (request) {
      const discord = require('discord.js'),
        requestBlock = new discord.RichEmbed(),
        time = new Date();

      requestBlock.setTitle(`Request from ${tag}`);
      requestBlock.setThumbnail(`https://i.imgur.com/HkRBcAV.png`);
      requestBlock.setColor(0x660066);
      requestBlock.setDescription(request);
      channelFrom.send('I\'ll deliver this straight to Wasteland Doctrine#9303! *Breathe Easy runs off with your letter*');
      channelTo.send(requestBlock);
      console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Request deliver success\n`);
      return;
    } else {
      throw error
    }
  } catch {
    channelFrom.send(`*Breathe Easy\'s face contorts in confusion when reading your letter*\n\nI\'m sorry i can\'t understand this. Please format your request \"/request new prompt title, desc, gif\" or \"/request new feature\" Etc.`);
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Request deliver fail\n`);
    return;
  }
}

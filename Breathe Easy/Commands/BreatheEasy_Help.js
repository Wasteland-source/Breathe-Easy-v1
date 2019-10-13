//A help block showing all the avaible commands and helping users to properly utilise the bot

module.exports = async function(tag, guild, channel) {

  try {
    const discord = require('discord.js'),
      help = new discord.RichEmbed(),
      time = new Date();
    //Creating a new help block

    help.setColor(0x06b890);
    help.setFooter('Breathe Easy');
    help.addField('Commands', 'Prefix /\n\nWelcome\n\nPing\n\nPrompt\n\nBreathe\n\nCount\n\nEncouragement\n\nHug\n\nReddit\n\nFeedback\n\nRequest\n\nHelp\n\nUpdates', true);
    help.addField('Description', 'Currently the prefix is fixed\n\nAn introduction to Breathe Easy\n\nShows the current ping of Breathe Easy\n\nSends a prompt assisting in guided visualtion\n\nSends a gif assisting in a breathing exercise\n\nSends a gif assisting a counting exercise\n\nGives you words of encouragement\n\nSends a hug\n\nRandom posts from cute and wholesome subreddits\n\nReporting issues,mistakes and your opinion on the bot\n\nRequests for new features and changes to existing features\n\nBrings up this block\n\nUpcoming features and changes', true);
    help.addBlankField();
    help.addField('Misc', 'This is a very early build of Breathe Easy so please bare with me as i add more features and improve what is aready here. Currently Breathe Easy attempts to assist in general relaxation and anxiety however with your feedback i hope to expand the issues Breathe Easy attempts to cope with');
    channel.send(help);
    console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Help command success\n`);
    return;
  } catch {
    channel.send('*Breathe Easy is carefully bringing the help block over to you when she lets out a small sneeze and drops it*\n\nI think i dropped the help block i\'m so sorry! You can always get my list of commands here instead:');
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Help command fail\n`);
    return;
  }
}

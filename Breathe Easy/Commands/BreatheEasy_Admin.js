//Admin commands for Breathe Easy

module.exports = async function(adCommand, botBE, tag, guild, channel, token, guildCount, userCount, msg) {
  try {
    const discord = require('discord.js');
    //importing discod.js

    switch (adCommand) { //Runs through code based on the keyword inputted
      case 'reload':
        channel.send('Attempting reload...');
        botBE.destroy();
        botBE.login(token);
        channel.send('Successfully reloaded Breathe Easy');
        console.log('\x1b[35m%s\x1b[0m', `${guild}:${tag} Breathe Easy reload success`);
        break;
      case 'guilds':
        channel.send(`Breathe Easy is currently connected to ${guildCount} guilds`);
        console.log('\x1b[35m%s\x1b[0m', `${guild}:${tag} Guild count success`);
        break;
      case 'users':
        channel.send(`Breathe Easy is currently serving ${userCount} users`);
        console.log('\x1b[35m%s\x1b[0m', `${guild}:${tag} User count success`);
        break;
      case 'repeat':
        channel.send(msg);
        console.log('\x1b[35m%s\x1b[0m', `${guild}:${tag} Repeat success`);
        break;
      default: //Sends a block with all the admin keywords
        const adCommandBlock = new discord.RichEmbed();

        adCommandBlock.setFooter('Breathe Easy');
        adCommandBlock.addField('Command', '\n\nReload\n\nGuilds\n\nUsers', true);
        adCommandBlock.addField('Description', '\n\nReloads Breathe Easy client\n\nSends guild count\n\nSends user count', true);
        adCommandBlock.setColor(0x660066);
        channel.send(adCommandBloc);
        console.log('\x1b[35m%s\x1b[0m', `${guild}:${tag} Admin command block success`);
    }
    return;
  } catch {
    channel.send('I couldn\'t do that! I\'m sorry Wastey-san don\'t punish me >:3');
    console.log('\x1b[35m%s\x1b[0m', `${guild}: ${tag} Admin command fail`);
    return;
  }
}
